import React, { useState, useContext } from 'react';
import styles from './NavBar.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import navs from '../../constants/navsBar.json';
import navProject from '../../constants/navProject.json';
import { Context } from '../../constants/Context';
import { useRouter } from 'next/router';

function HeaderNavBar({ setIsNavBar }) {
  const {
    handleClickMenuIntroduce,
    setType,
    setIsActive,
    setIsPushIntro,
    isPushIntro,
  } = useContext(Context);
  const router = useRouter();

  const handleClickNavItem = (index) => {
    setIsNavBar(false);
    setType(null);
    setIsActive(null);
    if (index !== 1) {
      setIsPushIntro(false);
    }
  };
  const handleClickNavIntro = (link) => {
    if (isPushIntro === false && link === '/gioi-thieu') {
      router.push('/gioi-thieu');
      setIsPushIntro(true);
    }
  };
  return (
    <ul className={styles.headerNav}>
      {navs.map((nav, index) => (
        <li className={styles.headerNavLi} key={index}>
          <Link href={nav.link}>
            <h4
              className={clsx({
                [styles.active]:
                  router.asPath == `${nav.link}` ||
                  router.route == `${nav.link}` ||
                  router.route == `${nav.link}/[slug]`,
              })}
              onClick={() => handleClickNavItem(index)}
            >
              {nav.title.toUpperCase()}
            </h4>
          </Link>
          <span
            className={clsx(styles.navItemLine, {
              [styles.active]:
                router.asPath == `${nav.link}` ||
                router.route == `${nav.link}` ||
                router.route == `${nav.link}/[slug]`,
            })}
          ></span>
          {nav.list && (
            <ul className={styles.navsItem}>
              {navs[index].list.map((item, i) => (
                <li
                  key={i}
                  className={clsx(styles.navsItemLi)}
                  onClick={() => handleClickNavIntro(item.link)}
                >
                  <h5
                    onClick={() =>
                      handleClickMenuIntroduce(item.idNav, item.link, item.type)
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
