import { Grid } from '@material-ui/core';
import React from 'react';
import ProductsPage from '../../pages/Products';
import Paginate from '../Pagination';
import Checked from '../Sort';
import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <Grid container className={styles.container}>
      <Grid item lg={2}>
        <Checked />
      </Grid>
      <Grid item lg={10}>
        <ProductsPage />
        <Paginate />
      </Grid>
    </Grid>
  );
};
export default HomePage;
