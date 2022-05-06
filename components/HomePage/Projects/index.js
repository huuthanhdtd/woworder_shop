import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
const listOne = [
  {
    title: 'Khu đô thị Ân Phú Buôn Ma Thuột',

    image: require('../../../public/home/project/bg1.jpg'),
  },
  {
    title: 'Khu dân cư số 2 Điện An',
    image: require('../../../public/home/project/bg2.jpg'),
  },
  {
    title: 'Khu dân cư Đông Tân Thiện',
    image: require('../../../public/home/project/bg2.jpg'),
  },
  {
    title: 'Khu đô thị Sa Huỳnh',
    image: require('../../../public/home/project/bg4.jpg'),
  },
];
const count = [1, 2, 3, 4, 5, 6];

const Projects = ({ projectIntoView, projectRef }) => {
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
          one: positions.one === 0 ? count.length - 1 : positions.one - 1,
          two: positions.two === 0 ? count.length - 1 : positions.two - 1,
          three: positions.three === 0 ? count.length - 1 : positions.three - 1,
          four: positions.four === 0 ? count.length - 1 : positions.four - 1,
          five: positions.five === 0 ? count.length - 1 : positions.five - 1,
        });
      }, 200);
      return () => clearTimeout(timeOut);
    }
    if (moveX < startX) {
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
    }
  };

  return (
    <div className={styles.projects} ref={projectRef}>
      <div className={styles.newsTitle}>
        <div className={styles.newsTitleBlock}>
          <h1>Dự án tiêu biểu</h1>
          <div className={styles.newsLine}></div>
        </div>
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
            <Grid container className={styles.listGrid}>
              {listOne.map((it, i) => (
                <Grid key={i} item xs={6} sm={3} md={3} className={styles.item}>
                  <Image src={it.image} />
                  <div className={styles.bgFake}></div>
                  <div className={styles.itemTitle}>
                    <h2
                      className={clsx({
                        [styles.active]: projectIntoView === true,
                      })}
                      style={{
                        transition: `all  ${i / 3 + 0.4}s ease-in-out`,
                      }}
                    >
                      {it.title.toUpperCase()}
                    </h2>
                  </div>
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
