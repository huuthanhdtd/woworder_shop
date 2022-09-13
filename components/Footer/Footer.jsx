import { Grid, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import Contact from './Contact';
import Payment from './Payment';
import styles from './styles.module.scss';

const buttons = [
  { name: 'Đăng nhập' },
  { name: 'Khách hàng' },
  { name: 'Facebook' },
];

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Grid container>
          <Grid item lg={8}>
            <Payment />
          </Grid>
          <Grid item lg={4}>
            <Contact />
          </Grid>
        </Grid>
        <div className={styles.copyRight}>
          <Typography variant="body1">
            WOWORDER | Copyright &copy; 2020 TiPiCi JSC. All right reserved.
          </Typography>
          <div className={styles.barBottom}>
            {buttons.map((it, idx) => (
              <Link href="/" key={idx}>
                {it.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
