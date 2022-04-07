import { Grid } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Address from './Address';
import Map from './Map';
import { AiOutlineRight } from 'react-icons/ai';

export default function Index() {
  return (
    <div className={styles.contact}>
      <div className={styles.newsBar}>
        <Link href="/">Trang chủ</Link>
        <AiOutlineRight className={styles.arrowIcon} />
        <Link href="/lien-he">Liên hệ</Link>
      </div>
      <Grid container spacing={4} className={styles.Main}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          style={{ padding: '0 13.125px' }}
        >
          <Map />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          style={{ padding: '0 13.125px' }}
        >
          <Address />
        </Grid>
      </Grid>
    </div>
  );
}
