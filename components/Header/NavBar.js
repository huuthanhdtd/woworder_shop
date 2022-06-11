import React, { useContext, useState } from 'react';
import styles from './NavBar.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { Context } from '../../constants/Context';
import { useRouter } from 'next/router';
import { AiFillCaretDown } from 'react-icons/ai';
function HeaderNavBar({ setIsNavBar, navs }) {
  const {
    handleClickMenuIntroduce,
    setType,
    setIsActive,
    setIsPushIntro,
    isPushIntro,
    setOpenVideo,
  } = useContext(Context);
  const router = useRouter();
  const [navItemAvtiveIndex, setNavItemAvtiveIndex] = useState();
  const handleClickNavItem = (index) => {
    setIsNavBar(false);
    setType(null);
    setIsActive(null);
    setOpenVideo(false);

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
  const handleShowNavItem = (index) => {
    if (navItemAvtiveIndex === index) {
      setNavItemAvtiveIndex();
    } else {
      setNavItemAvtiveIndex(index);
    }
  };
  return (
    <ul className={styles.headerNav}>
      {navs.map((nav, index) => (
        <li className={styles.headerNavLi} key={index}>
          <span
            className={clsx(styles.headerNavLiTitle, {
              [styles.active]: navItemAvtiveIndex === index,
            })}
          >
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

            {nav.list && (
              <span
                onClick={() => handleShowNavItem(index)}
                className={clsx(styles.rightIcon, {
                  [styles.active]:
                    router.asPath == `${nav.link}` ||
                    router.route == `${nav.link}` ||
                    router.route == `${nav.link}/[slug]`,
                })}
              >
                <AiFillCaretDown className={clsx(styles.icon)} />
              </span>
            )}
            <span
              className={clsx(styles.navItemLine, {
                [styles.active]:
                  router.asPath == `${nav.link}` ||
                  router.route == `${nav.link}` ||
                  router.route == `${nav.link}/[slug]`,
              })}
            ></span>
          </span>

          {nav.list && (
            <ul
              className={clsx(styles.navsItem)}
              style={{
                height:
                  navItemAvtiveIndex === index
                    ? `${nav.list.length * 40}px`
                    : 0,
              }}
            >
              {nav.list.map((item, i) => (
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
