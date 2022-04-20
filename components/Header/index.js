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
  const handleShowNav = () => {
    setIsNavBar(!isNavBar);
  };
  const handleCloseBars = () => {
    setIsNavBar(!isNavBar);
  };

  return (
    <div className={styles.headerNovalandMax}>
      <Container maxWidth="lg">
        <div className={styles.headerNovaland}>
          <Link href="/">
            <div className={styles.logoImage}>
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
            <HeaderNavBar setIsNavBar={setIsNavBar} />
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
