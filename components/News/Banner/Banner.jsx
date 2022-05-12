import { CardMedia } from '@material-ui/core';
import React from 'react';
import styles from './Banner.module.scss';
import { getMediaFollowSize, getStrapiMedia } from '../../../lib/media';

function BannerMain({ image }) {
  return (
    <CardMedia
      image={image ? getStrapiMedia(image) : '/Tin-tuc/banner.jpg'}
      className={styles.banner}
    >
      <div className={styles.cover}></div>
    </CardMedia>
  );
}
export default BannerMain;
