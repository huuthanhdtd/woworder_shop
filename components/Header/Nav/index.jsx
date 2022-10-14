import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../assets/image/logo.svg';
import {
  MdOutlineAccountCircle,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { BsCart } from 'react-icons/bs';
import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Category from './Category';
import Account from './Account/Account';
import Search from './Search';
import clsx from 'clsx';
import { useWindowSize } from 'react-use';
const Cart = dynamic(() => import('./Cart/Cart'), {
  ssr: false,
});

export default function Nav({
  categories,
  openNav,
  setOpenNav,
  handleMove,
  suggestions,
  setSuggestions,
  openAccount,
  setOpenAccount,
  openCart,
  setOpenCart,
}) {
  const { totalItems } = useCart();
  const router = useRouter();
  let Success = true;
  const { width } = useWindowSize();
  const [searchTerm, setSearchTerm] = useState('');
  const [wid, setWid] = useState();
  useEffect(() => {
    setWid(width);
  }, [width]);
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
  const onfocus = () => {
    setSuggestions(true);
    setOpenAccount(false);
    setOpenCart(false);
    setOpenNav(false);
  };
  return (
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
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        onfocus={onfocus}
      />
      <div className={styles.wrap}>
        <div className={styles.account}>
          {Success === false ? (
            <div className={styles.beforeCart} onClick={handleAccount}>
              <div className={styles.iconAccount}>
                <MdOutlineAccountCircle />
              </div>
              <div className={styles.nameAccount}>Tài khoản</div>
            </div>
          ) : (
            <div className={styles.loginSuccess} onClick={handleAccount}>
              {wid >= 900 ? (
                <>
                  <div>Tài khoản</div>
                  <div>
                    Quyn le
                    <span>
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <MdOutlineAccountCircle style={{ width: 25, heigth: 25 }} />
                </>
              )}
            </div>
          )}

          <Account
            openNav={openNav}
            setOpenNav={setOpenNav}
            openAccount={openAccount}
            setOpenAccount={setOpenAccount}
            Success={Success}
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
  );
}
