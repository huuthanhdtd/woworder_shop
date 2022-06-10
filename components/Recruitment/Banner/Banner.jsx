import { CardMedia } from '@material-ui/core';
import React from 'react';
import { getMediaFollowSize } from '../../../lib/media';
import styles from './Banner.module.scss';
import Image from 'next/image';

function BannerMain({ urlImageResize }) {
  return (
    <>
      <div className={styles.banner}>
        <Image
          src={
            urlImageResize ? getMediaFollowSize(urlImageResize) : '/error.svg'
          }
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.cover}></div>
    </>
  );
}
export default BannerMain;
