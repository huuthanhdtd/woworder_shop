import React from 'react';
import styles from './Banner.module.scss';
import { CardMedia } from '@material-ui/core';
import NextImage from 'next/image';
import url from '../../public/Banner/banner.jpg';

function Banner({ getImage }) {
  return (
    <>
      <NextImage className={styles.image} src={url} />
    </>
  );
}

export default Banner;
