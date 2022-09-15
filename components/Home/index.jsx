import { Grid } from '@material-ui/core';
import React from 'react';
import Paginate from '../Pagination';
import Products from '../Products';
import Checked from '../Sort';
import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Grid container className={styles.container}>
        <Grid item lg={2}>
          <Checked />
        </Grid>
        <Grid item lg={10}>
          <Products />
          <Paginate />
        </Grid>
      </Grid>
    </div>
  );
};
export default HomePage;
