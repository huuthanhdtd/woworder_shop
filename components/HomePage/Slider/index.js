import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
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
      'https://investone-law.com/wp-content/uploads/2018/10/kinh-doanh-bat-dong-san.jpg',
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
      'https://file4.batdongsan.com.vn/2021/07/20/20210720085039-e922_wm.jpg',
  },
  {
    title: 'giá trị cốt lõi',
    desc: [
      {
        title: 'hiệu quả - chính trực - chuyên nghiệp',
      },
    ],
    image:
      'https://news.meeycdn.com/uploads/2020/08/Nh%E1%BB%AFng-gi%C3%A1-tr%E1%BB%8B-l%E1%BB%9Bn-m%C3%A0-c%C3%B4ng-ngh%E1%BB%87-%C4%91em-l%E1%BA%A1i-cho-ng%C3%A0nh-b%E1%BA%A5t-%C4%91%E1%BB%99ng-s%E1%BA%A3n.jpg',
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
      'https://danviet.mediacdn.vn/296231569849192448/2021/7/21/novalandaquacity-1626837551060367617341.jpg',
  },
  {
    title: 'giá trị cốt lõi',
    desc: [
      {
        title: 'hiệu quả - chính trực - chuyên nghiệp',
      },
    ],
    image:
      'https://khudothivanphuc.com.vn/uploads/TongTheNgay01_R4_Vuong-1920-030.jpg',
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
      'https://baoxaydung.com.vn/stores/news_dataimages/hiep/122021/17/12/2521_image001.jpg',
  },
  {
    title: 'giá trị cốt lõi',
    desc: [
      {
        title: 'hiệu quả - chính trực - chuyên nghiệp',
      },
    ],
    image:
      'http://thongtinnhadat.info.vn/wp-content/uploads/2019/05/phoi-canh-khu-nha-pho-du-an-thanh-xuan-riverside-2.jpg',
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
