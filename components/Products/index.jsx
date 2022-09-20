import { Button, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useCallback } from 'react';
import { orderButton } from '../../constants/commonData';
import CardProduct from '../CardProduct';
import styles from './styles.module.scss';
import SelectList from '../DropDown/DropDown';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

const Products = ({ filteredResize, page, perPage, checked, setPage }) => {
  const [isOrder, setOrder] = React.useState(null);

  const handleOrder = useCallback((type) => {
    setOrder(type.name);
  }, []);

  const dataFilter = React.useMemo(() => {
    return filteredResize?.slice(0 + perPage * (page - 1), perPage * page);
  }, [page, checked.length]);

  const handleChangePage = React.useCallback((e) => {
    if (e === 'prev') {
      setPage((prev) => prev - 1);
    } else if (e === 'next') {
      setPage((prev) => prev + 1);
    }
  }, []);
  const totalPage = Math.ceil(filteredResize.length / perPage);
  return (
    <div className={styles.wrapper}>
      <div className={styles.boxOrder}>
        <div className={styles.orderBtn}>
          <Typography variant="h6">Sắp xếp theo</Typography>
          {orderButton.map((it, idx) => (
            <Button
              key={idx}
              className={clsx(styles.button, {
                [styles.active]: isOrder === it.name,
              })}
              onClick={() => handleOrder(it)}
            >
              {it.name}
            </Button>
          ))}
          <SelectList />
        </div>
        <div className={styles.selectPage}>
          <Typography variant="body2">
            {page}/{totalPage}
          </Typography>
          <Button
            disabled={page === 1 ? true : false}
            className={styles.button}
            onClick={() => handleChangePage('prev')}
          >
            <RiArrowLeftSLine size={20} />
          </Button>
          <Button
            disabled={page === totalPage ? true : false}
            className={styles.button}
            onClick={() => handleChangePage('next')}
          >
            <RiArrowRightSLine size={20} />
          </Button>
        </div>
      </div>
      <Grid container>
        {dataFilter.map((data, index) => (
          <Grid key={index} item lg={3} className={styles.card}>
            <CardProduct data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default React.memo(Products);
