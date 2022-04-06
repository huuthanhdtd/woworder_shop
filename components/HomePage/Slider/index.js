import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import NextImage from './imageSlide';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const list = [
  {
    title: 'giá trị cốt lõi',
    desc: [
      {
        title: 'hiệu quả - chính trực - chuyên nghiệp',
      },
    ],
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609-0125.png',
  },
  {
    title: 'sứ mệnh',
    desc: [
      {
        title: '- kiến tạo cộng đồng',
      },
      {
        title: '- hiệu quả - chính trực - chuyên nghiệp',
      },
      {
        title: '- kiến tạo cộng đồng',
      },
    ],
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609.png',
  },
  {
    title: 'giá trị cốt lõi',
    desc: [
      {
        title: 'hiệu quả - chính trực - chuyên nghiệp',
      },
    ],
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-web-novagroup-1440x609px---florida---resize.jpg',
  },
  {
    title: 'sứ mệnh',
    desc: [
      {
        title: '- kiến tạo cộng đồng',
      },
      {
        title: '- hiệu quả - chính trực - chuyên nghiệp',
      },
      {
        title: '- kiến tạo cộng đồng',
      },
    ],
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/web-nvl-hotram.jpg',
  },
  {
    title: 'giá trị cốt lõi',
    desc: [
      {
        title: 'hiệu quả - chính trực - chuyên nghiệp',
      },
    ],
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609-100.jpg',
  },
  {
    title: 'sứ mệnh',
    desc: [
      {
        title: '- kiến tạo cộng đồng',
      },
      {
        title: '- hiệu quả - chính trực - chuyên nghiệp',
      },
      {
        title: '- kiến tạo cộng đồng',
      },
    ],
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/web-nvl-aqua.jpg',
  },
  {
    title: 'giá trị cốt lõi',
    desc: [
      {
        title: 'hiệu quả - chính trực - chuyên nghiệp',
      },
    ],
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/aqua-2.jpg',
  },
];

function Slider({ slides, projects, articles }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [moveX, setMoveX] = useState(null);
  // const [slidesArray, setSlidesArray] = useState(
  //   articles.filter((item) => item.attributes.image.data !== null)
  // )
  const [slidesArray, setSlidesArray] = useState(list);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev < slidesArray.length - 1) {
          return prev + 1;
        }
        if (prev >= slidesArray.length - 1) {
          return 0;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleClickLeft = () => {
    setActiveIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      if (prev === 0) {
        return Number(slidesArray.length - 1);
      }
    });
  };
  const handleClickRight = () => {
    setActiveIndex((prev) => {
      if (prev < slidesArray.length - 1) {
        return prev + 1;
      }
      if (prev >= slidesArray.length - 1) {
        return 0;
      }
    });
  };

  const handleTouchStart = (e) => {
    setStartX(Number(e.touches[0].clientX));
  };
  const handleTouchMove = (e) => {
    setMoveX(Number(e.touches[0].clientX));
  };
  const handleTouchEnd = () => {
    if (moveX > startX) {
      setActiveIndex((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          return slidesArray.length - 1;
        }
      });
    }
    if (moveX < startX) {
      setActiveIndex((prev) => {
        if (prev < slidesArray.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }
  };
  const handleClickDot = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        {list &&
          list.map((item, index) => (
            <div
              key={index}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={clsx(styles.bg, {
                [styles.active]: Number(activeIndex) === index,
              })}
            >
              {/* {item.attributes.image.data !== null && (
                <NextImage
                  image={item.attributes.image && item.attributes.image}
                />
              )} */}
              <img src={item.image} />
            </div>
          ))}
        <div className={styles.controls}>
          <div className={styles.btn} onClick={handleClickLeft}>
            <FaChevronLeft className={styles.icon} />
          </div>
          <div className={styles.btn} onClick={handleClickRight}>
            <FaChevronRight className={styles.icon} />
          </div>
        </div>
        <div className={styles.contents}>
          {list.map((item, index) => (
            <div
              key={index}
              className={clsx(styles.content, {
                [styles.active]: index === Number(activeIndex),
              })}
            >
              <span className={styles.title}>{item.title}</span>

              <div className={styles.desc}>
                {list[index].desc.map((it, i) => (
                  <span key={i} className={styles.descCt}>
                    {it.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={clsx(styles.dots)}>
          {slidesArray.map((item, index) => (
            <div
              key={index}
              className={clsx({
                [styles.active]: activeIndex === index,
              })}
              onClick={() => handleClickDot(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
