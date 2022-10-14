import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Sliders from './SliderHeaderMiddle';
import Nav from './Nav';

const Header = ({ categories }) => {
  const statisticalRef = useRef(null);
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [suggestions, setSuggestions] = useState(false);
  const handleMove = () => {
    setOpenAccount(false);
    setOpenCart(false);
    setOpenNav(false);
    setSuggestions(false);
  };
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (
        prevScrollpos > currentScrollPos &&
        prevScrollpos !== null &&
        currentScrollPos !== null
      ) {
        document.getElementById('statisticalRef').style.top = '';
      } else {
        document.getElementById('statisticalRef').style.top = '-50px';
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);
  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.none]: router.pathname === '/checkouts/[id]',
      })}
    >
      <div
        className={clsx(styles.modal, {
          [styles.active]:
            openNav === true ||
            openCart === true ||
            openAccount === true ||
            suggestions === true,
        })}
        onClick={handleMove}
      ></div>
      <div className={styles.HeaderTop}>
        <Nav
          categories={categories}
          handleMove={handleMove}
          openNav={openNav}
          setOpenNav={setOpenNav}
          openCart={openCart}
          setOpenCart={setOpenCart}
          openAccount={openAccount}
          setOpenAccount={setOpenAccount}
          suggestions={suggestions}
          setSuggestions={setSuggestions}
        />
      </div>
      <div
        className={styles.middleHeader}
        ref={statisticalRef}
        id="statisticalRef"
      >
        <Sliders categories={categories} />
      </div>
    </div>
  );
};

export default Header;
