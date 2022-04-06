import React, { useEffect, useState } from 'react';
import Link from 'next/Link';
import styles from './NavIntroduce.module.scss';
import MenuIcon from '@material-ui/icons/Menu';
import { GrFormClose } from 'react-icons/gr';
import nav from '../../../constants/navsBar.json';

export default function NavIntroduce() {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(0);
  const handleClickNav = (index) => {
    setActive(index);
    setIsMobile(false);
    console.log(index);
  };
  return (
    <div className={styles.Main}>
      <div className={styles.NavIntroduce}>
        <div className={styles.ModuleContent}>
          {nav[1].list &&
            nav[1].list.map((data, index) => (
              <div className={styles.container} key={index}>
                <ul>
                  <Link href={`#${data.idNav}`}>
                    <li
                      onClick={() => handleClickNav(index)}
                      className={active === index ? styles.items : null}
                    >
                      {data.title}
                    </li>
                  </Link>
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.test}>
        <div className={styles.btnWrapper} onClick={() => setIsMobile(true)}>
          <div className={styles.btnNav}>
            GIỚI THIỆU <MenuIcon />
          </div>
        </div>
      </div>
      <div
        className={styles.mobile}
        style={{
          transform: isMobile
            ? 'translate(-1000px, -7px)'
            : 'translate(0px, -7px)',
        }}
      >
        <div className={styles.Navmobile} style={{ position: 'relative' }}>
          <div className={styles.iconClose} onClick={() => setIsMobile(false)}>
            <GrFormClose />
          </div>
          {nav[1].list &&
            nav[1].list.map((data, index) => (
              <ul
                key={index}
                onClick={() => handleClickNav(index)}
                className={Number(active) === index ? styles.items : null}
              >
                <Link href={`#${data.idNav}`}>
                  <li>{data.title}</li>
                </Link>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
}
