import { CardMedia } from '@material-ui/core';
import React from 'react';
import styles from './Banner.module.scss';

function BannerMain({ image }) {
  const stylesBanner = {
    height: '500px',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  };
  const url =
    'https://www.novaland.com.vn/Data/Sites/1/Banner/1440x0/default.jpg';
  return <CardMedia image={url} className={styles.banner} />;
}
export default BannerMain;
