import React, { useContext } from 'react';
import styles from './NavBar.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { Context } from '../../constants/Context';
import { useRouter } from 'next/router';

function HeaderNavBar({ setIsNavBar, navs }) {
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
  const handleClickNavIntro = (idNav, link, type) => {
    handleClickMenuIntroduce(idNav, link, type);
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
                <li key={i} className={clsx(styles.navsItemLi)}>
                  <h5
                    onClick={() =>
                      handleClickNavIntro(item.idNav, item.link, item.type)
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
