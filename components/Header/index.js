import React, { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import Container from '@material-ui/core/Container';
import styles from './style.module.scss';
import HeaderNavBar from './NavBar';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import Image from 'next/image';
import Logo from '../../public/logo_anphu.svg';
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
              {/* <Image src={Logo} /> */}
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
            <HeaderNavBar setIsNavBar={setIsNavBar} navs={navs} />
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
