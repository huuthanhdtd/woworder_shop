import { CardMedia, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import SlideTag from '../../../lib/SlideTag';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { getStrapiMedia } from '../../../lib/media';

const Projects = ({ projectRef, projects }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.projects} ref={projectRef}>
      <div className={styles.newsTitle}>
        <div
          className={styles.newsTitleBlock}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1>Dự án tiêu biểu</h1>
          <div className={styles.newsLine}></div>
        </div>
      </div>

      <div data-aos="fade-up">
        <SlideTag>
          {projects
            .filter((it) => it.attributes.typical_project === 'yes')
            .map((item, i) => (
              <Link key={i} href={`/du-an/${item.attributes.slug}`}>
                <Grid item xs={6} sm={3} md={3} className={styles.item}>
                  <div className={styles.itemImage}>
                    <CardMedia
                      image={getStrapiMedia(item.attributes.image)}
                      style={{
                        height: 'inherit',
                        width: 500,
                        backgroundPosition: 'center center',
                        backgroundSize: '200%',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                  </div>
                  <div className={styles.bgFake}></div>
                  <div className={styles.itemTitle}>
                    <h2>{item.attributes.title.toUpperCase()}</h2>
                  </div>
                </Grid>
              </Link>
            ))}
        </SlideTag>
      </div>
    </div>
  );
};
export default Projects;
