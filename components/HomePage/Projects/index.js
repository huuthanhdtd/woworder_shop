import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import NextImage from './imagePj';
import SlideTag from '../../../lib/SlideTag';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = ({ projectRef, typicalProjects }) => {
  // console.log(typicalProjects);
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div className={styles.projects} ref={projectRef}>
      <div className={styles.newsTitle}>
        <div
          className={styles.newsTitleBlock}
          data-aos="fade-right"
          // data-aos-duration="1500"
        >
          <h1>Dự án tiêu biểu</h1>
          <div className={styles.newsLine}></div>
        </div>
      </div>
      <SlideTag>
        {typicalProjects.map((item, i) => (
          <Grid
            key={i}
            item
            xs={6}
            sm={3}
            md={3}
            className={styles.item}
            data-aos="fade-up"
          >
            <div className={styles.itemImage}>
              <NextImage image={item.attributes.image} />
            </div>
            <div className={styles.bgFake}></div>
            <div className={styles.itemTitle}>
              <h2>{item.attributes.name.toUpperCase()}</h2>
            </div>
          </Grid>
        ))}
      </SlideTag>
    </div>
  );
};
export default Projects;
