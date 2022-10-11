import { Button, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { orderButton } from '../../../constants/commonData';
import CardProduct from '../../CardProduct';
import styles from './styles.module.scss';
import SortBar from '../../SortBar';

const Products = ({
  filteredProducts,
  page,
  perPage,
  checked,
  setPage,
  data,
  setChecked,
  handleClearFilter,
  category,
  open,
  setOpen,
}) => {
  const dataFilter = React.useMemo(() => {
    return filteredProducts?.slice(0 + perPage * (page - 1), perPage * page);
  }, [page, checked.length, filteredProducts]);

  const handleChangePage = React.useCallback((e) => {
    if (e === 'prev') {
      setPage((prev) => prev - 1);
    } else if (e === 'next') {
      setPage((prev) => prev + 1);
    }
  }, []);

  const totalPage = Math.ceil(filteredProducts.length / perPage);
  return (
    <div className={styles.wrapper}>
      <SortBar
        page={page}
        totalPage={totalPage}
        category={category}
        open={open}
        setOpen={setOpen}
        orderData={orderButton}
        handleChangePage={handleChangePage}
      />
      <Grid
        container
        justifyContent="flex-start"
        className={styles.containerProducts}
      >
        {dataFilter.map((data, index) => (
          <Grid
            key={index}
            item
            lg={2}
            md={3}
            sm={3}
            xs={6}
            className={styles.card}
          >
            <CardProduct data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default React.memo(Products);
