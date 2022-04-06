import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import Container from '@material-ui/core/Container';
import styles from './style.module.scss';
import HeaderNavBar from './NavBar';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import Image from 'next/image';
import Logo from '../../public/logo_anphu.svg';

function Header() {
  const [isNavBar, setIsNavBar] = useState(false);
  const [isSearchBlock, setIsSearchBlock] = useState(false);
  const [navItemActive, setNavItemActive] = useState(0);
  useEffect(() => {
    setNavItemActive(localStorage.getItem('navActive'));
  }, []);

  const handleShowNav = () => {
    setIsNavBar(!isNavBar);
    if (isSearchBlock) {
      setIsSearchBlock(false);
    }
  };
  const handleCloseBars = () => {
    setIsNavBar(!isNavBar);
    if (isSearchBlock) {
      setIsSearchBlock(false);
    }
  };
  const handleClickLogo = () => {
    setNavItemActive(0);
  };

  return (
    <div className={styles.headerNovalandMax}>
      <Container maxWidth="lg">
        <div className={styles.headerNovaland}>
          <Link href="/">
            <div className={styles.logoImage} onClick={handleClickLogo}>
              <Image src={Logo} />
            </div>
          </Link>
          <div
            className={clsx(styles.headerContent, {
              [styles.showBars]: isNavBar,
            })}
          >
            <AiOutlineClose
              className={styles.closeIcon}
              onClick={handleCloseBars}
            />

            <span className={styles.numberPhone}>
              <h4>Tổng đài CSKH: </h4>
              <h3>1900 63 6666</h3>
            </span>
            <HeaderNavBar
              setIsNavBar={setIsNavBar}
              setIsSearchBlock={setIsSearchBlock}
              setNavItemActive={setNavItemActive}
              navItemActive={navItemActive}
            />
          </div>
          <AiOutlineMenu
            className={clsx(styles.barIcon, {
              [styles.hidden]: isNavBar === true,
            })}
            onClick={handleShowNav}
          />
        </div>
      </Container>
    </div>
  );
}

export default Header;
