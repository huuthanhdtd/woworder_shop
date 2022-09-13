import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { footerData } from '../../constants/commonData';
import styles from './paymentStyles.module.scss';

const Payment = () => {
  const data = footerData.paymentData;
  return (
    <div className={styles.payment}>
      <Typography className={styles.title} variant="h5">
        {data.payment}
      </Typography>
      <Grid container>
        {data.data.map((item, idx) => (
          <Grid lg={4} item key={idx} className={styles.boxPay}>
            <div className={styles.avatar}></div>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Payment;
