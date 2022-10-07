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
const Cart = dynamic(() => import('./Cart/Cart'), {
  ssr: false,
});

const Header = () => {
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
    }
  };
  const handleCart = () => {
    if (openCart === true) {
      setOpenCart(false);
    } else {
      setOpenCart(true);
      setOpenAccount(false);
      setOpenNav(false);
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
  const unforcus = () => {
    setSuggestions(false);
  };
  const handleSearch = () => {
    router.push({
      pathname: '/page-search',
      query: { searchTerm: searchTerm },
    });
  };
  const handleOnchange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    setOpenAccount(false);
    setOpenCart(false);
    setOpenNav(false);
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('statisticalRef').style.top = '';
      } else {
        document.getElementById('statisticalRef').style.top = '-50px';
      }
      prevScrollpos = currentScrollPos;
    };
    let input = document.getElementById('myInput');
    input.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        router.push({
          pathname: '/page-search',
          query: { searchTerm: e.target.value },
        });
        // setSuggestions(false);
        unforcus();
      } else {
        // setSuggestions(true);
        onfocus();
      }
    });
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
          <Category openNav={openNav} setOpenNav={setOpenNav} />
          <Link href="/">
            <div className={styles.logo} onClick={handleMove}>
              <Image src={Logo} width={220} height={47} />
            </div>
          </Link>
          <div className={styles.search}>
            <input
              id="myInput"
              placeholder="Nhập url/mã/tên sản phẩm để tìm..."
              // value={searchTerm || ''}
              className={styles.inputSearch}
              onChange={debounce(handleOnchange, 250)}
              onFocus={onfocus}
              onBlur={unforcus}
            />
            <Button className={styles.icon} onClick={handleSearch}>
              <AiOutlineSearch />
            </Button>
            <Suggestions
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              suggestions={suggestions}
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
              <div suppressHydrationWarning={true}>
                {totalItems > 0 ? (
                  <div
                    className={clsx(styles.taskbarCart, {
                      [styles.active]: router.asPath === '/',
                    })}
                  >
                    <div
                      className={styles.product}
                      suppressHydrationWarning={true}
                    >
                      {totalItems} sản phẩm
                    </div>
                    <div
                      className={styles.totalPriceMobile}
                      suppressHydrationWarning={true}
                    >
                      {cartTotal}
                    </div>
                    <div
                      className={styles.detailCart}
                      onClick={() => setOpenCart(true)}
                    >
                      Xem chi tiết
                    </div>
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
        <Sliders />
      </div>
    </div>
  );
};

export default Header;
