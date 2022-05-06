import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import SlideTag from '../../../lib/SlideTag';
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

const Projects = ({ projectIntoView, projectRef }) => {
  return (
    <div className={styles.projects} ref={projectRef}>
      <div className={styles.newsTitle}>
        <div className={styles.newsTitleBlock}>
          <h1>Dự án tiêu biểu</h1>
          <div className={styles.newsLine}></div>
        </div>
      </div>
      <SlideTag>
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
      </SlideTag>
    </div>
  );
};
export default Projects;
