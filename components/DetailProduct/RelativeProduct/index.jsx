import { Typography } from '@material-ui/core';
import React from 'react';
import Slides from './SlideProduct';
import styles from './styles.module.scss';

const RelativeProduct = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <Typography variant="h6">{title}</Typography>
      <Slides />
    </div>
  );
};

export default RelativeProduct;
