import { Button, Grid, Typography } from '@material-ui/core';
// import clsx from 'clsx';
import React from 'react';
import CardProduct from '../../CardProduct';
import styles from './styles.module.scss';
import SortBar from '../../SortBar';
import { sortByPrice } from '../../../utils/sortByPrice';
// import Link from 'next/link';
import Router, { useRouter } from 'next/router';

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
  lastProductRef,
  query,
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
      const { id } = query;
      if (e === 'prev') {
        id.splice(1, 1, page - 1);
        Router.push({ pathname: `/categories/[[...id]]`, query: { id } });
        setPage((prev) => prev - 1);
      } else if (e === 'next') {
        id.splice(1, 1, page + 1);
        Router.push({ pathname: `/categories/[[...id]]`, query: { id } });
        setPage((prev) => prev + 1);
      }
    },
    [category.id, page]
  );

  const totalPage = category?.productCount
    ? Math.ceil(category.productCount / 10)
    : 0;
  return (
    <div className={styles.wrapper}>
      <SortBar
        page={page}
        totalPage={totalPage}
        category={category}
        open={open}
        setOpen={setOpen}
        handleChangePage={handleChangePage}
        setSortPriceType={setSortPriceType}
      />
      {products.length > 0 ? (
        <div
          // container
          // justifyContent="flex-start"
          className={styles.containerProducts}
        >
          {dataFilter?.map((data, index) => {
            if (dataFilter.length === index + 1) {
              return (
                <div key={index} className={styles.card} ref={lastProductRef}>
                  <CardProduct data={data} />
                </div>
              );
            } else {
              return (
                <div key={index} className={styles.card}>
                  <CardProduct data={data} />
                </div>
              );
            }
          })}
        </div>
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
