import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Paginate from '../Pagination';
import Products from '../Products';
import Checked from '../Sort';
import styles from './styles.module.scss';
import products from '../../constants/product.json';

const HomePage = () => {
  const [checked, setChecked] = useState([]);
  const filteredResize = products?.filter((item) =>
    checked.length ? checked.includes(item.data.slug) : true
  );
  return (
    <div className={styles.wrapper}>
      <Grid container className={styles.container}>
        <Grid item lg={2}>
          <Checked setChecked={setChecked} checked={checked} />
        </Grid>
        <Grid item lg={10}>
          <Products filteredResize={filteredResize} />
          <Paginate />
        </Grid>
      </Grid>
    </div>
  );
};
export default HomePage;
