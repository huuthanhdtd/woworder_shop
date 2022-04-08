import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Grid } from '@material-ui/core';
import { BsClockHistory } from 'react-icons/bs';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Link from 'next/link';
import NextImage from './image';
import { GoTriangleRight } from 'react-icons/go';

function HotNews({ articles }) {
  const [news, setNews] = useState(
    articles.filter(
      (item, index) => item.attributes.image.data !== null && index < 3
    )
  );
  return (
    <Grid container spacing={1} className={styles.hotNews}>
      {news &&
        news.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={index === 0 ? 12 : 6}
            lg={index === 0 ? 12 : 6}
          >
            <div className={styles.newsContentItem}>
              <div className={styles.content}>
                <div className={styles.imageHot}>
                  {/* <img src={item.image_description} /> */}

                  {item.attributes.image.data !== null && (
                    <NextImage
                      image={item.attributes.image && item.attributes.image}
                    />
                  )}
                </div>
                <Link href="/">
                  <div className={styles.titleBlock}>
                    <h2>{item.attributes.title}</h2>
                    <GoTriangleRight className={styles.rightIcon} />
                  </div>
                </Link>
                <h4>{item.attributes.description}</h4>
              </div>
            </div>
          </Grid>
        ))}
    </Grid>
  );
}

export default HotNews;
