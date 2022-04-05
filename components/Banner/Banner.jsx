import React from 'react';
import styles from './Banner.module.scss';
import { CardMedia } from '@material-ui/core';

function Banner({ getImage }) {
  return (
    <>
      <CardMedia className={styles.image} image="/Banner/banner.jpg" />
    </>
  );
}

export default Banner;
