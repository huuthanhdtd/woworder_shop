import { CardMedia } from '@material-ui/core';
import React from 'react';
import styles from './Banner.module.scss';
import { useRouter } from 'next/router';
import { getMediaFollowSize, getStrapiMedia } from '../../../lib/media';

function BannerMain({ image }) {
  const router = useRouter();
  return (
    <CardMedia
      image={
        router.pathname == '/tuyen-dung'
          ? '/tuyen-dung/tuyendung.jpg'
          : '/tuyen-dung/tuyendung.jpg'
      }
      className={styles.banner}
    >
      <div className={styles.cover}></div>
    </CardMedia>
  );
}
export default BannerMain;
