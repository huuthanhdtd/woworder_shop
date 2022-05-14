import { CardMedia } from '@material-ui/core';
import React from 'react';
import { getMediaFollowSize } from '../../../lib/media';
import styles from './Banner.module.scss';

function BannerMain({ urlImageResize }) {
  return (
    <CardMedia
      image={getMediaFollowSize(urlImageResize)}
      className={styles.banner}
    >
      <div className={styles.cover}></div>
    </CardMedia>
  );
}
export default BannerMain;
