import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Address from './Address';
import Map from './Map';

export default function Index({ contacts }) {
  const [maps, setMaps] = useState('');
  return (
    <div className={styles.contact}>
      <div className={styles.title_page}>
        <h5>LIÊN HỆ</h5>
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
          <Map maps={maps} contacts={contacts} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          style={{ padding: '0 13.125px' }}
        >
          <Address setMaps={setMaps} contacts={contacts} />
        </Grid>
      </Grid>
    </div>
  );
}
