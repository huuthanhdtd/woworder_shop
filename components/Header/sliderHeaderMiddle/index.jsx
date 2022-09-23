import Link from 'next/link';
import React, { useState } from 'react';
import Slider from 'react-slick';
import styles from './styles.module.scss';
import { BsHouse } from 'react-icons/bs';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import { useRouter } from 'next/router';

export default function Sliders() {
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
    ,
    {
      name: 'đồ chơi cho bé',
      slug: 'do-choi',
    },
    {
      name: 'đồ chơi cho bé',
      slug: 'do-choi',
    },
    {
      name: 'đồ chơi cho bé',
      slug: 'do-choi',
    },
    {
      name: 'đồ chơi cho bé',
      slug: 'do-choi',
    },
  ];
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    loop: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };
  const [activeBtn, setActiveBtn] = useState('');
  const handleBtn = (slug) => {
    setActiveBtn(slug);
  };
  return (
    <div className={styles.content}>
      <div className={styles.home}>
        <Link href="/">
          <BsHouse fontSize={35} />
        </Link>
      </div>
      <div className={styles.sliderSlick}>
        <Slider {...settings}>
          {hot.map((data, index) => (
            <div className={styles.Hot} key={index}>
              <Button
                className={clsx(styles.item, {
                  [styles.active]: activeBtn === data.slug,
                })}
                onClick={() => handleBtn(data.slug)}
              >
                {data.name}
              </Button>
            </div>
          ))}
        </Slider>
        <div className={styles.hot_moblie}>
          {hot.map((data, index) => (
            <Button
              className={clsx(styles.item_mobile, {
                [styles.active]: activeBtn === data.slug,
              })}
              onClick={() => handleBtn(data.slug)}
              key={index}
            >
              {data.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
