import React, { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import Container from '@material-ui/core/Container';
import styles from './style.module.scss';
import HeaderNavBar from './NavBar';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import ImageLogo from '../HomePage/Introduce/imageLogo';

function Header({ isBarsSmall, navs, homepage }) {
  const [isNavBar, setIsNavBar] = useState(false);
  const handleShowNav = () => {
    setIsNavBar(!isNavBar);
  };
  const handleCloseBars = () => {
    setIsNavBar(!isNavBar);
  };

  return (
    <div
      className={clsx(styles.headerNovalandMax, {
        [styles.barsSmall]: isBarsSmall,
      })}
    >
      <Container maxWidth="lg">
        <div className={styles.headerNovaland}>
          <Link href="/">
            <div className={styles.logoImage}>
              {homepage.attributes.menu_logo && (
                <ImageLogo image={homepage.attributes.menu_logo} />
              )}
            </div>
          </Link>
          <div
            className={clsx(styles.headerContent, {
              [styles.showBars]: isNavBar,
            })}
          >
            <HeaderNavBar setIsNavBar={setIsNavBar} navs={navs} />
          </div>
          {!isNavBar ? (
            <AiOutlineMenu
              className={clsx(styles.barIcon)}
              onClick={handleShowNav}
            />
          ) : (
            <AiOutlineClose
              className={styles.barIcon}
              onClick={handleCloseBars}
            />
          )}
        </div>
      </Container>
    </div>
  );
}

export default Header;
