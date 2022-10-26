import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function UseList({ dataPolicy }) {
  const [activeNav, setActiveNav] = useState(true);
  const handleShowNavItem = () => {
    if (activeNav === true) {
      setActiveNav();
    } else {
      setActiveNav(true);
    }
  };
  const list = dataPolicy.map((data) => data.title);
  const s = dataPolicy.find((data) => data.title === 'Hỗ trợ khách hàng').items;

  return (
    <div className={styles.menu}>
      <h3 onClick={handleShowNavItem}>{list}</h3>
      <ul
        className={clsx(styles.Ul_item, {
          [styles.active]: activeNav === true,
        })}
        style={{
          height: activeNav === true ? `${s.length * 44}px` : 0,
        }}
      >
        {s.map((data, index) => (
          <li className={styles.li_item} key={index}>
            <Link
              href={`${
                data.name === 'Giới thiệu' || data.name === 'Liên hệ'
                  ? `${data.link}`
                  : `/support${data.link}`
              }`}
            >
              {data.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
