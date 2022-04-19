import { Container, Grid } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const listOne = [
  {
    title: 'giá trị cốt lõi',

    image: 'https://ddireal.vn/wp-content/uploads/2022/03/dat-nen-ddireal.jpg',
  },
  {
    title: 'sứ mệnh',
    image:
      'https://ddireal.vn/wp-content/uploads/2022/03/shophouse-ddireal.jpg',
  },
  {
    title: 'giá trị cốt lõi',
    image: 'https://ddireal.vn/wp-content/uploads/2022/03/biet-thu-ddireal.jpg',
  },
  {
    title: 'sứ mệnh',
    image: 'https://ddireal.vn/wp-content/uploads/2022/03/can-ho-ddireal.jpg',
  },
];
const count = [1, 2, 3, 4, 5, 6];

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
        one: positions.one === 0 ? count.length - 1 : positions.one - 1,
        two: positions.two === 0 ? count.length - 1 : positions.two - 1,
        three: positions.three === 0 ? count.length - 1 : positions.three - 1,
        four: positions.four === 0 ? count.length - 1 : positions.four - 1,
        five: positions.five === 0 ? count.length - 1 : positions.five - 1,
      });
    }, 200);
    return () => clearTimeout(timeOut);
  };
  const hadleClickNext = () => {
    const timeOut = setTimeout(() => {
      setPositions({
        one: positions.one === count.length - 1 ? 0 : positions.one + 1,
        two: positions.two === count.length - 1 ? 0 : positions.two + 1,
        three: positions.three === count.length - 1 ? 0 : positions.three + 1,
        four: positions.four === count.length - 1 ? 0 : positions.four + 1,
        five: positions.five === count.length - 1 ? 0 : positions.five + 1,
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
        {count.map((item, index) => (
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
            {/* <img src={item.image} /> */}

            <Grid container className={styles.listGrid}>
              {listOne.map((it, i) => (
                <Grid key={i} item xs={6} sm={3} md={3} className={styles.item}>
                  <img src={it.image} />
                  <span>{it.title.toUpperCase()}</span>
                </Grid>
              ))}
            </Grid>
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
