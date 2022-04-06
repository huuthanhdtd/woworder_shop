import { Container } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const listOne = [
  {
    title: 'giá trị cốt lõi',

    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609-0125.png',
  },
  {
    title: 'sứ mệnh',
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609.png',
  },
  {
    title: 'giá trị cốt lõi',
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-web-novagroup-1440x609px---florida---resize.jpg',
  },
  {
    title: 'sứ mệnh',
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/web-nvl-hotram.jpg',
  },
  {
    title: 'giá trị cốt lõi',
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-web-novagroup-1440x609px---florida---resize.jpg',
  },
  {
    title: 'sứ mệnh',
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/web-nvl-hotram.jpg',
  },
];

const listTwo = [
  {
    title: 'sứ mệnh',
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609.png',
  },
  {
    title: 'giá trị cốt lõi',
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-web-novagroup-1440x609px---florida---resize.jpg',
  },
  {
    title: 'sứ mệnh',
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/web-nvl-hotram.jpg',
  },
  {
    title: 'giá trị cốt lõi',
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609-100.jpg',
  },
  {
    title: 'sứ mệnh',
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/web-nvl-aqua.jpg',
  },
  {
    title: 'giá trị cốt lõi',
    image:
      'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609-100.jpg',
  },
];
const Projects = () => {
  const [startX, setStartX] = useState(null);
  const [moveX, setMoveX] = useState(null);
  const [positions, setPositions] = useState({
    one: 0,
    two: 1,
    three: 2,
    four: 3,
    five: 4,
  });

  const hadleClickPrev = () => {
    const timeOut = setTimeout(() => {
      setPositions({
        one: positions.one === 0 ? listOne.length - 1 : positions.one - 1,
        two: positions.two === 0 ? listOne.length - 1 : positions.two - 1,
        three: positions.three === 0 ? listOne.length - 1 : positions.three - 1,
        four: positions.four === 0 ? listOne.length - 1 : positions.four - 1,
        five: positions.five === 0 ? listOne.length - 1 : positions.five - 1,
      });
    }, 200);
    return () => clearTimeout(timeOut);
  };
  const hadleClickNext = () => {
    const timeOut = setTimeout(() => {
      setPositions({
        one: positions.one === listOne.length - 1 ? 0 : positions.one + 1,
        two: positions.two === listOne.length - 1 ? 0 : positions.two + 1,
        three: positions.three === listOne.length - 1 ? 0 : positions.three + 1,
        four: positions.four === listOne.length - 1 ? 0 : positions.four + 1,
        five: positions.five === listOne.length - 1 ? 0 : positions.five + 1,
      });
    }, 200);
    return () => clearTimeout(timeOut);
  };

  const handleTouchStart = (e) => {
    setStartX(Number(e.touches[0].clientX));
  };
  const handleTouchMove = (e) => {
    setMoveX(Number(e.touches[0].clientX));
  };

  const handleTouchEnd = () => {
    if (moveX > startX) {
      const timeOut = setTimeout(() => {
        setPositions({
          one: positions.one === 0 ? listOne.length - 1 : positions.one - 1,
          two: positions.two === 0 ? listOne.length - 1 : positions.two - 1,
          three:
            positions.three === 0 ? listOne.length - 1 : positions.three - 1,
          four: positions.four === 0 ? listOne.length - 1 : positions.four - 1,
          five: positions.five === 0 ? listOne.length - 1 : positions.five - 1,
        });
      }, 200);
      return () => clearTimeout(timeOut);
    }
    if (moveX < startX) {
      const timeOut = setTimeout(() => {
        setPositions({
          one: positions.one === listOne.length - 1 ? 0 : positions.one + 1,
          two: positions.two === listOne.length - 1 ? 0 : positions.two + 1,
          three:
            positions.three === listOne.length - 1 ? 0 : positions.three + 1,
          four: positions.four === listOne.length - 1 ? 0 : positions.four + 1,
          five: positions.five === listOne.length - 1 ? 0 : positions.five + 1,
        });
      }, 200);
      return () => clearTimeout(timeOut);
    }
  };

  return (
    <div className={styles.projects}>
      <div className={styles.newsTitle}>
        <h1>Dự án tiêu biểu</h1>
        <div className={styles.newsLine}></div>
      </div>
      <div
        className={styles.wrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {listOne.map((item, index) => (
          <div
            key={index}
            className={clsx(styles.projectItem, {
              [styles.onePosition]: positions.one === index,
              [styles.twoPosition]: positions.two === index,
              [styles.threePosition]: positions.three === index,
              [styles.fourPosition]: positions.four === index,
              [styles.fivePosition]: positions.five === index,

              [styles.none]:
                positions.three - index >= 3 || positions.three - index <= -3,
            })}
          >
            <img src={item.image} />
          </div>
        ))}
        <div className={clsx(styles.controls)}>
          <div className={styles.prev} onClick={hadleClickPrev}>
            <FaChevronLeft className={styles.prevIcon} />
          </div>
          <div className={styles.next} onClick={hadleClickNext}>
            <FaChevronRight className={styles.nextIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
