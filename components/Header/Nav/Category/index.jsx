import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { BsHouse } from 'react-icons/bs';
import { IoMdArrowDropup, IoMdClose } from 'react-icons/io';
import clsx from 'clsx';
import { RiArrowDropUpLine } from 'react-icons/ri';
import { useWindowSize } from 'react-use';

export default function Category({ openNav, setOpenNav, categories }) {
  const [activeNav, setActiveNav] = useState();
  const [he, setHe] = useState();
  const { height } = useWindowSize();
  const handleShowNavItem = (index) => {
    if (activeNav === index) {
      setActiveNav();
    } else {
      setActiveNav(index);
    }
  };
  useEffect(() => {
    const h = height;
    setHe(h);
  }, [height]);
  return (
    <div
      className={clsx(styles.showNav, {
        [styles.active]: openNav === true,
      })}
    >
      <div className={styles.dropUp}>
        <IoMdArrowDropup />
      </div>
      <div className={styles.containerCategory}>
        <ul className={styles.ul_ListCategory}>
          <li className={styles.home}>
            <Link href="/">
              <div className={styles.iconHome}>
                <BsHouse />
              </div>
            </Link>
            <div className={styles.close} onClick={() => setOpenNav(false)}>
              <IoMdClose />
            </div>
          </li>
          <div
            className={styles.scroll}
            style={{ maxHeight: `calc(${he}px - 117px)` }}
          >
            {categories?.items.map((data, index) => (
              <li className={styles.li_ListCategory} key={index}>
                <div className={styles.nameDrop}>
                  <Link
                    href={`/categories/[[...id]]`}
                    as={`/categories/${data.id}/1`}
                    onClick={() => setOpenNav(false)}
                  >
                    {data.name}
                  </Link>
                  {/* icons drop Down category */}
                  {/* {data.data.list && (
                  <div
                    className={styles.iconDrop}
                    onClick={() => handleShowNavItem(index)}
                  >
                    <div
                      className={clsx(styles.drop_Down_Up, {
                        [styles.active]: activeNav === index,
                      })}
                    >
                      <RiArrowDropUpLine />
                    </div>
                  </div>
                )} */}
                </div>
                {/* drop Down category */}
                {/* {data.data.list && (
                <ul
                  className={clsx(styles.Ul_item, {
                    [styles.active]: activeNav === index,
                  })}
                  style={{
                    height:
                      activeNav === index
                        ? `${data.data.list.length * 40}px`
                        : 0,
                  }}
                >
                  {data.data.list?.map((item, e) => (
                    <li className={styles.li_item} key={e}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              )} */}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
