import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineHome,
} from 'react-icons/ai';
import { BsCart, BsHouse } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';
import Image from 'next/image';
import Logo from '../../assets/image/logo.svg';
import styles from './styles.module.scss';
import { Button, TextField } from '@material-ui/core';
import Category from './Category';
import clsx from 'clsx';
import Cart from './Cart/Cart';
import Account from './Account/Account';
import { useRouter } from 'next/router';

const Header = () => {
  const hot = [
    {
      name: 'Khuyến mãi',
      slug: 'khuyen-mai',
    },
    {
      name: 'sữa bột cao cấp',
      slug: 'sua',
    },
    {
      name: 'Vitamin & sức Khoẻ',
      slug: 'vitamin',
    },
    {
      name: 'Ăn dặm dinh dưỡng',
      slug: 'an',
    },
    {
      name: 'Cho mẹ bầu sau sinh',
      slug: 'me-bau',
    },
    {
      name: 'chăm sóc gia đình',
      slug: 'gia-dinh',
    },
    {
      name: 'chăm sóc gia đình',
      slug: 'csgd',
    },
    ,
    {
      name: 'đồ chơi cho bé',
      slug: 'do-choi',
    },
    {
      name: 'đồ chơi cho bé',
      slug: 'do-choi',
    },
    {
      name: 'đồ chơi cho bé',
      slug: 'do-choi',
    },
    {
      name: 'đồ chơi cho bé',
      slug: 'do-choi',
    },
  ];
  const statisticalRef = useRef(null);
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [activeBtn, setActiveBtn] = useState('');
  const handleOpen = () => {
    if (openNav === true) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
      setOpenCart(false);
      setOpenAccount(false);
    }
  };
  const handleCart = () => {
    if (openCart === true) {
      setOpenCart(false);
    } else {
      setOpenCart(true);
      setOpenNav(false);
      setOpenAccount(false);
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
  const handleBtn = (slug) => {
    setActiveBtn(slug);
  };
  useEffect(() => {
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
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.HeaderTop}>
        <div className={styles.nav}>
          <div className={styles.menu}>
            <div className={styles.icons} onClick={handleOpen}>
              {openNav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <div className={styles.name}>MENU</div>
          </div>
          <Category openNav={openNav} setOpenNav={setOpenNav} />
          <Link href="/">
            <div className={styles.logo}>
              <Image src={Logo} width={220} height={47} />
            </div>
          </Link>
          <div className={styles.search}>
            <TextField
              variant="outlined"
              placeholder="Nhập url/mã/tên sản phẩm để tìm..."
              size="small"
              className={styles.inputSearch}
            />
            <div className={styles.icon}>
              <AiOutlineSearch />
            </div>
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
              <div className={styles.beforeCart} onClick={handleCart}>
                <div className={styles.iconCart}>
                  <BsCart />
                </div>
                <div className={styles.nameCart}>Giỏ hàng</div>
              </div>
              <div className={styles.taskbarCart}>
                <div className={styles.product}>1 sản phẩm</div>
                <div className={styles.totalPriceMobile}> 500,000</div>
                <div
                  className={styles.detailCart}
                  onClick={() => setOpenCart(true)}
                >
                  Xem chi tiết
                </div>
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
        <div className={styles.bgmiddle}>
          <div className={styles.iconHome}>
            <Link href="/">
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BsHouse />
              </div>
            </Link>
          </div>
          <div className={styles.Hot}>
            {hot.map((data, index) => (
              <Button
                className={clsx(styles.item, {
                  [styles.active]:
                    activeBtn === data.slug || router.asPath === data.slug,
                })}
                key={index}
                onClick={() => handleBtn(data.slug)}
              >
                {data.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
