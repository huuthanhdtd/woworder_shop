import { CardMedia } from '@material-ui/core';
import React from 'react';
import styles from './Banner.module.scss';

function BannerMain({ urlImageResize, image }) {
  return (
    <CardMedia
      image={urlImageResize ? urlImageResize : '/Tin-tuc/banner.jpg'}
      className={styles.banner}
    >
      <div className={styles.cover}></div>
    </CardMedia>
  );
}
export default BannerMain;
