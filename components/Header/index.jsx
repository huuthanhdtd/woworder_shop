import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';
import Image from 'next/image';
import Logo from '../../assets/image/logo.svg';
import styles from './styles.module.scss';
import { Button, debounce } from '@material-ui/core';
import Category from './Category';
import clsx from 'clsx';
import Account from './Account/Account';
import { useRouter } from 'next/router';
import Sliders from './SliderHeaderMiddle';
import { useCart } from 'react-use-cart';
import Suggestions from './Suggestions';
import dynamic from 'next/dynamic';
import { local } from '../../lib';
const Cart = dynamic(() => import('./Cart/Cart'), {
  ssr: false,
});

const Header = ({ categories }) => {
  const statisticalRef = useRef(null);
  const router = useRouter();
  const { totalItems, cartTotal } = useCart();
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState(false);

  const handleOpen = () => {
    if (openNav === true) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
      setOpenAccount(false);
      setOpenCart(false);
      setSuggestions(false);
    }
  };
  const handleCart = () => {
    if (openCart === true) {
      setOpenCart(false);
    } else {
      setOpenCart(true);
      setOpenAccount(false);
      setOpenNav(false);
      setSuggestions(false);
    }
    if (router.asPath === '/cart') {
      setOpenCart(false);
      router.push('/cart');
    }
  };
  const handleAccount = () => {
    if (openAccount === true) {
      setOpenAccount(false);
    } else {
      setOpenAccount(true);
      setOpenCart(false);
      setOpenNav(false);
      setSuggestions(false);
    }
  };
  const handleMove = () => {
    setOpenAccount(false);
    setOpenCart(false);
    setOpenNav(false);
    setSuggestions(false);
  };
  const onfocus = () => {
    setSuggestions(true);
  };
  // const handleSearch = () => {};
  const handleOnchange = (e) => {
    setSearchTerm(e.target.value);
    setSuggestions(true);
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/page-search',
      query: { searchTerm: searchTerm },
    });
    setSuggestions(false);
  };
  useEffect(() => {
    setOpenAccount(false);
    setOpenCart(false);
    setOpenNav(false);
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
        <div className={styles.nav}>
          <div className={styles.menu} onClick={handleOpen}>
            <div className={styles.icons}>
              {openNav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <div className={styles.name}>MENU</div>
          </div>
          <Category
            openNav={openNav}
            setOpenNav={setOpenNav}
            categories={categories}
          />
          <Link href="/">
            <div className={styles.logo} onClick={handleMove}>
              <Image src={Logo} width={220} height={47} />
            </div>
          </Link>
          <div className={styles.search}>
            <form onSubmit={(e) => handleSubmitSearch(e)}>
              <input
                id="myInput"
                placeholder="Nhập url/mã/tên sản phẩm để tìm..."
                className={styles.inputSearch}
                onChange={debounce(handleOnchange, 250)}
                onFocus={onfocus}
              />
              <Button className={styles.icon} type="submit">
                <AiOutlineSearch />
              </Button>
            </form>
            <Suggestions
              searchTerm={searchTerm}
              suggestions={suggestions}
              setSuggestions={setSuggestions}
            />
          </div>
          <div className={styles.wrap}>
            <div className={styles.account}>
              <div className={styles.beforeCart} onClick={handleAccount}>
                <div className={styles.iconAccount}>
                  <MdOutlineAccountCircle />
                </div>
                <div className={styles.nameAccount}>Tài khoản</div>
              </div>
              <Account
                openNav={openNav}
                setOpenNav={setOpenNav}
                openAccount={openAccount}
                setOpenAccount={setOpenAccount}
              />
            </div>
            <div className={styles.cart}>
              <div
                className={styles.beforeCart}
                onClick={handleCart}
                suppressHydrationWarning={true}
              >
                <div className={styles.iconCart}>
                  <BsCart />
                </div>
                <div className={styles.nameCart}>Giỏ hàng</div>
                {totalItems ? (
                  <div
                    className={clsx(styles.quatityCart, {
                      [styles.active]: totalItems > 9,
                    })}
                  >
                    <div className={styles.bigcart}>{totalItems}</div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <Cart openCart={openCart} setOpenCart={setOpenCart} />
            </div>
          </div>
        </div>
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
