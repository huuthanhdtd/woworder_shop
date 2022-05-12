import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsArrowRightCircle } from 'react-icons/bs';
import { ImCircleRight } from 'react-icons/im';
import Image from './imageSlide';

// import Image from 'next/image';

const list = [
  {
    title: 'giá trị cốt lõi',
    desc: [
      {
        title: 'hiệu quả - chính trực - chuyên nghiệp',
      },
    ],
    image: require('../../../public/slider/slide1.jpg'),
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
    image: require('../../../public/slider/slide2.jpg'),
  },
  {
    title: 'giá trị cốt lõi',
    desc: [
      {
        title: 'hiệu quả - chính trực - chuyên nghiệp',
      },
    ],
    image: require('../../../public/slider/slide3.jpg'),
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
    image: require('../../../public/slider/slide4.jpg'),
  },
  {
    title: 'giá trị cốt lõi',
    desc: [
      {
        title: 'hiệu quả - chính trực - chuyên nghiệp',
      },
    ],
    image: require('../../../public/slider/slide5.jpg'),
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
    image: require('../../../public/slider/slide6.jpg'),
  },
  {
    title: 'giá trị cốt lõi',
    desc: [
      {
        title: 'hiệu quả - chính trực - chuyên nghiệp',
      },
    ],
    image: require('../../../public/slider/slide7.jpg'),
  },
];

function Slider({ slides, projects, articles }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [moveX, setMoveX] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev < slides.length - 1) {
          return prev + 1;
        }
        if (prev >= slides.length - 1) {
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
        return Number(slides.length - 1);
      }
    });
  };
  const handleClickRight = () => {
    setActiveIndex((prev) => {
      if (prev < slides.length - 1) {
        return prev + 1;
      }
      if (prev >= slides.length - 1) {
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
          return slides.length - 1;
        }
      });
    }
    if (moveX < startX) {
      setActiveIndex((prev) => {
        if (prev < slides.length - 1) {
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
        {slides &&
          slides.map((item, index) => (
            <div
              key={index}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={clsx(styles.bg, {
                [styles.active]: Number(activeIndex) === index,
              })}
            >
              {item.attributes.image.data !== null && (
                <Image image={item.attributes.image && item.attributes.image} />
              )}
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
          {slides &&
            slides.map((item, index) => (
              <div
                key={index}
                className={clsx(styles.content, {
                  [styles.active]: index === Number(activeIndex),
                })}
              >
                <span className={styles.title}>
                  {item.attributes.title}
                  <span className={styles.btnDetail}>
                    Xem
                    <ImCircleRight className={styles.btnDetailIcon} />
                  </span>
                </span>
                <span className={styles.desc}>
                  <p className={styles.descCt}>{item.attributes.description}</p>
                </span>
              </div>
            ))}
        </div>
        <div className={clsx(styles.dots)}>
          {slides.map((item, index) => (
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
