import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { BsHouse } from 'react-icons/bs';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import ScrollMenu from 'react-horizontal-scroll-menu';
import data from '../../../constants/database.json';
import { useRouter } from 'next/router';

export default function Sliders() {
  const router = useRouter();
  const hot = [
    {
      name: 'Khuyến mãi',
      slug: 'khuyen-mai',
    },
    {
      name: 'sữa bột cao cấp',
      slug: 'sua',
    },
    {
      name: 'Vitamin & sức Khoẻ',
      slug: 'vitamin',
    },
    {
      name: 'Ăn dặm dinh dưỡng',
      slug: 'an',
    },
    {
      name: 'Cho mẹ bầu sau sinh',
      slug: 'me-bau',
    },
    {
      name: 'chăm sóc gia đình',
      slug: 'gia-dinh',
    },
    {
      name: 'chăm sóc gia đình',
      slug: 'csgd',
    },
    {
      name: 'đồ chơi cho bé',
      slug: 'do-choi',
    },
    {
      name: 'đồ chơi cho bé',
      slug: 'dp',
    },
    {
      name: 'đồ chơi cho bé',
      slug: 'da',
    },
    {
      name: 'đồ chơi cho bé',
      slug: 'd',
    },
    {
      name: 'đồ chơi cho bé',
      slug: 'g',
    },
  ];
  const [selected, setSelected] = useState('null');
  const filcategories = data.included.categories.filter((data) => data);
  useEffect(() => {
    const fi = filcategories.find((e, i) => i === Number(selected));
    if (fi) {
      router.push({
        pathname: fi.slug,
      });
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
          data={filcategories.map((data, idx) => {
            return (
              <div key={idx} className={styles.Hot}>
                {/* <Link href={data.slug}> */}
                <Button
                  className={clsx(styles.item, {
                    [styles.active]: router.asPath === `/${data.slug}`,
                  })}
                >
                  {data.name}
                </Button>
                {/* </Link> */}
              </div>
            );
          })}
        />
      </div>
    </div>
  );
}
