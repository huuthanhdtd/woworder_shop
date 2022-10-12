import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { BsHouse } from 'react-icons/bs';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import ScrollMenu from 'react-horizontal-scroll-menu';
import { useRouter } from 'next/router';

export default function Sliders({ categories }) {
  const b = JSON.parse(process.env.NEXT_PUBLIC_CATEGORY);
  const router = useRouter();
  const [selected, setSelected] = useState('null');
  const [sort, setSortEnv] = useState([]);
  const filtoEnv = categories.items.filter((item) => b.includes(item.name));
  const notSort = categories.items.filter((item) => item.name);
  const sortEnvs = filtoEnv.sort((p, c) =>
    b.findIndex((i) => i === c.name) !== -1
      ? b.findIndex((i) => i === p.name) - b.findIndex((i) => i === c.name)
      : -999
  );
  const filcategories = categories.items.filter((data) => data);
  useEffect(() => {
    const fi = filcategories.find((e, i) => i === Number(selected));
    if (fi) {
      router.push({
        pathname: `/categories/${fi.id}`,
      });
    }
    if (filtoEnv.length !== b.length) {
      setSortEnv(notSort);
    } else {
      setSortEnv(sortEnvs);
    }
  }, [selected]);
  const onSelect = (key) => {
    setSelected(key);
  };

  return (
    <div className={styles.content}>
      <div className={styles.home}>
        <Link href="/">
          <div>
            <BsHouse fontSize={35} />
          </div>
        </Link>
      </div>
      <div className={styles.sliderSlick}>
        <ScrollMenu
          alignCenter={false}
          onSelect={onSelect}
          data={sort.map((data, idx) => {
            return (
              <div key={idx} className={styles.Hot}>
                <Button
                  className={clsx(styles.item, {
                    [styles.active]: router.asPath === `/categories/${data.id}`,
                  })}
                >
                  {data.name}
                </Button>
              </div>
            );
          })}
        />
      </div>
    </div>
  );
}
