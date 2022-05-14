import { CardMedia } from '@material-ui/core';
import React from 'react';
import styles from './Banner.module.scss';

function BannerMain({ urlImageResize }) {
  return (
    <CardMedia image={urlImageResize} className={styles.banner}>
      <div className={styles.cover}></div>
    </CardMedia>
  );
}
export default BannerMain;
