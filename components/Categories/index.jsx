import { Grid, Typography, Link } from '@material-ui/core';
import React, { useState } from 'react';
import Paginate from '../Pagination';
import Products from './Products';
import Checked from '../Sort';
import styles from './styles.module.scss';
import products from '../../constants/product.json';
import { useRouter } from 'next/router';

const CategoriesPage = () => {
  const [checked, setChecked] = useState([]);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(24);
  const router = useRouter();
  const data = Array.from({ length: 200 });

  const filteredResize = products?.filter((item) =>
    checked.length ? checked.includes(item.data.slug) : true
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={styles.wrapper}>
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item lg={11} md={11} sm={11} className={styles.tabBar}>
          <Link href={'/'}>
            <Typography variant="body1">Trang chủ</Typography>
          </Link>
          <Typography variant="body2">{`/ ${router.query.slug}`}</Typography>
        </Grid>
        <Grid item lg={2} md={false} className={styles.filterBox}>
          <Checked
            setChecked={setChecked}
            checked={checked}
            setPage={setPage}
          />
        </Grid>
        <Grid item lg={9} md={11} sm={12}>
          <Products
            filteredResize={filteredResize}
            page={page}
            perPage={perPage}
            checked={checked}
            setPage={setPage}
            data={data}
            setChecked={setChecked}
          />
          <Grid container justifyContent="center">
            <Grid item>
              <Paginate
                count={Math.ceil(data.length / perPage)}
                // count={Math.ceil(filteredResize.length / perPage)}
                page={page}
                onChange={handleChange}
                color="primary"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default CategoriesPage;
