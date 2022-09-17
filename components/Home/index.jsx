import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Paginate from '../Pagination';
import Products from '../Products';
import Checked from '../Sort';
import styles from './styles.module.scss';
import products from '../../constants/product.json';

const HomePage = () => {
  const [checked, setChecked] = useState([]);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(2);

  const filteredResize = products?.filter((item) =>
    checked.length ? checked.includes(item.data.slug) : true
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={styles.wrapper}>
      <Grid container className={styles.container}>
        <Grid item lg={2}>
          <Checked
            setChecked={setChecked}
            checked={checked}
            setPage={setPage}
          />
        </Grid>
        <Grid item lg={10}>
          <Products
            filteredResize={filteredResize}
            page={page}
            perPage={perPage}
            checked={checked}
          />
          <Paginate
            count={Math.ceil(filteredResize.length / perPage)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default HomePage;
