import { Typography } from '@material-ui/core';
import React from 'react';
import Slides from './SlideProduct';
import styles from './styles.module.scss';

const RelativeProduct = ({ title, products }) => {
  return (
    <div className={styles.wrapper}>
      {products.length > 0 && <Typography variant="h6">{title}</Typography>}
      <Slides data={products} />
    </div>
  );
};

export default RelativeProduct;
