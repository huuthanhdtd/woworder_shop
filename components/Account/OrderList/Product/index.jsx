import { CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import {
  convertCurrency,
  multiCurrency,
} from '../../../../utils/convertCurrency';
import styles from './styles.module.scss';

const Product = ({ item }) => {
  return (
    <div className={styles.product}>
      {/* <CardMedia image={item?.imageUrl} className={styles.image} /> */}
      <div className={styles.infor}>
        <Typography variant="body2" className={styles.name}>
          {item?.name}
        </Typography>
        <Typography variant="body2" className={styles.detail}>
          {item?.color} {item?.size}
        </Typography>
        <Typography variant="body2" className={styles.qty}>
          x{item?.quantity}
        </Typography>
      </div>
      <div className={styles.description}>
        <Typography variant="body2" className={styles.text}>
          {item?.description}
        </Typography>
      </div>
      <div className={styles.price}>
        <Typography variant="body2" className={styles.discount}>
          {multiCurrency(item?.webPrice, { unit: 'USD', type: 'en-US' })}
        </Typography>
        <Typography variant="body2" className={styles.priceCurr}>
          {convertCurrency(item?.sellPrice)}
        </Typography>
      </div>
    </div>
  );
};

export default Product;
