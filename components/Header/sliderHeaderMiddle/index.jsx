import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import { BsHouse } from 'react-icons/bs';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import ScrollMenu from 'react-horizontal-scroll-menu';
import { useRouter } from 'next/router';

export default function Sliders({ categories }) {
  const b = process.env.NEXT_PUBLIC_CATEGORY;
  const router = useRouter();
  const [selected, setSelected] = useState('null');
  const sort = useMemo(() => {
    if (b !== undefined) {
      const SortProduct = categories.items.filter(
        (item) => item.products.length > 0
      );
      return SortProduct;
    } else {
      JSON.parse(process.env.NEXT_PUBLIC_CATEGORY);
      const filtoEnv = categories.items.filter((item) =>
        JSON.parse(b)?.includes(item.name)
      );
      const sortEnvs = filtoEnv.sort((p, c) =>
        JSON.parse(b)?.findIndex((i) => i === c.name) !== -1
          ? JSON.parse(b)?.findIndex((i) => i === p.name) -
            JSON.parse(b)?.findIndex((i) => i === c.name)
          : -999
      );
      return sortEnvs;
    }
  }, []);
  useEffect(() => {}, [selected]);
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
                <Link href={`/categories/${data.id}`}>
                  <Button
                    className={clsx(styles.item, {
                      [styles.active]:
                        router.asPath === `/categories/${data.id}`,
                    })}
                  >
                    {data.name}
                  </Button>
                </Link>
              </div>
            );
          })}
        />
      </div>
    </div>
  );
}
