import { Button, Grid, Typography } from '@material-ui/core';
// import clsx from 'clsx';
import React from 'react';
import { orderButton } from '../../../constants/commonData';
import CardProduct from '../../CardProduct';
import styles from './styles.module.scss';
import SortBar from '../../SortBar';
import { sortByPrice } from '../../../utils/sortByPrice';
// import Link from 'next/link';
import Router from 'next/router';

const Products = ({
  filteredProducts,
  page,
  // perPage,
  setPage,
  category,
  open,
  setOpen,
  sortPriceType,
  setSortPriceType,
  products,
  categoryData,
}) => {
  const dataFilter = React.useMemo(() => {
    // const newData = filteredProducts?.slice(
    //   0 + perPage * (page - 1),
    //   perPage * page
    // );
    if (sortPriceType) {
      return sortByPrice(filteredProducts, sortPriceType);
    } else {
      return filteredProducts;
    }
  }, [filteredProducts, sortPriceType]);

  const handleChangePage = React.useCallback(
    (e) => {
      if (e === 'prev') {
        Router.push(`/categories/${category.id}/${page - 1}`);
        setPage((prev) => prev - 1);
      } else if (e === 'next') {
        Router.push(`/categories/${category.id}/${page + 1}`);
        setPage((prev) => prev + 1);
      }
    },
    [category.id, page]
  );

  // const totalPage = Math.ceil(filteredProducts.length / perPage);
  return (
    <div className={styles.wrapper}>
      <SortBar
        page={page}
        // totalPage={totalPage}
        category={category}
        open={open}
        setOpen={setOpen}
        orderData={orderButton}
        handleChangePage={handleChangePage}
        setSortPriceType={setSortPriceType}
        categoryData={categoryData}
      />
      {products.length > 0 ? (
        <Grid
          container
          justifyContent="flex-start"
          className={styles.containerProducts}
        >
          {dataFilter?.map((data, index) => (
            <Grid
              key={index}
              item
              lg={2}
              md={3}
              sm={4}
              xs={6}
              className={styles.card}
            >
              <CardProduct data={data} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className={styles.notify}>
          <Typography variant="body2" className={styles.notification}>
            Trang này không có sản phẩm.
          </Typography>
          {/* <Link href={'/'}> Trang chủ</Link> */}
        </div>
      )}
    </div>
  );
};

export default Products;
