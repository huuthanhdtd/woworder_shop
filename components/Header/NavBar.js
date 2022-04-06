import React, { useState, useContext } from 'react';

import SearchIcon from '@material-ui/icons/Search';

import styles from './NavBar.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import navs from '../../constants/navsBar.json';
import { Context } from '../../constants/Context';

function HeaderNavBar({ setIsSearchBlock, setIsNavBar }) {
  const { handleClickMenuIntroduce } = useContext(Context);

  const [navItemActive, setNavItemActive] = useState(0);
  const handleClickNavItem = (index) => {
    setIsNavBar(false);
    setNavItemActive(index);
  };
  return (
    <ul className={styles.headerNav}>
      {navs.map((nav, index) => (
        <li className={styles.headerNavLi} key={index}>
          <Link href={nav.link}>
            <h4
              className={clsx({
                [styles.active]: index === Number(navItemActive),
              })}
              onClick={() => handleClickNavItem(index)}
            >
              {nav.title.toUpperCase()}
            </h4>
          </Link>
          <span
            className={clsx(styles.navItemLine, {
              [styles.active]: index === Number(navItemActive),
            })}
          ></span>
          {nav.list && (
            <ul className={styles.navsItem}>
              {navs[index].list.map((item, i) => (
                <li key={i} className={clsx(styles.navsItemLi)}>
                  <h5
                    onClick={() =>
                      handleClickMenuIntroduce(item.idNav, navItemActive)
                    }
                  >
                    {item.title.toUpperCase()}
                  </h5>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default HeaderNavBar;
