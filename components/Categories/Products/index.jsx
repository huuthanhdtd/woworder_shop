import { Button, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useCallback } from 'react';
import { orderButton } from '../../../constants/commonData';
import CardProduct from '../../CardProduct';
import styles from './styles.module.scss';
import SelectList from '../../DropDown/DropDown';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import { BiFilterAlt } from 'react-icons/bi';
import FilterMobile from '../FilterBoxMobile';
import { AiOutlineMenuFold } from 'react-icons/ai';
import OrderMobile from '../OrderMobile';

const Products = ({
  filteredResize,
  page,
  perPage,
  checked,
  setPage,
  data,
  setChecked,
}) => {
  const [isOrder, setOrder] = React.useState(null);

  const [listFilter, setListFilter] = React.useState(false);
  const [listInOrder, setListInOrder] = React.useState(false);

  const handleOrder = useCallback((type) => {
    setOrder(type.name);
  }, []);

  const dataFilter = React.useMemo(() => {
    return data?.slice(0 + perPage * (page - 1), perPage * page);
  }, [page, checked.length]);

  const handleChangePage = React.useCallback((e) => {
    if (e === 'prev') {
      setPage((prev) => prev - 1);
    } else if (e === 'next') {
      setPage((prev) => prev + 1);
    }
  }, []);

  const handleOpenFilterBox = React.useCallback(() => {
    setListFilter(!listFilter);
    setListInOrder(false);
  }, [listFilter]);

  const handleOpenInOrderBox = React.useCallback(() => {
    setListInOrder(!listInOrder);
    setListFilter(false);
  }, [listInOrder]);

  const handleOnBlur = () => {
    setListFilter(false);
    setListInOrder(false);
  };
  const totalPage = Math.ceil(data.length / perPage);
  return (
    <div className={styles.wrapper} onBlur={handleOnBlur}>
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
        <div className={styles.mobileFilter}>
          <Button onClick={handleOpenFilterBox} className={styles.mobileBtn}>
            <BiFilterAlt size={16} style={{ marginRight: 5 }} />
            Bộ lọc
          </Button>
          <Button onClick={handleOpenInOrderBox} className={styles.mobileBtn}>
            <AiOutlineMenuFold size={16} style={{ marginRight: 5 }} />
            Sắp xếp
          </Button>
        </div>
      </div>
      <FilterMobile
        listFilter={listFilter}
        checked={checked}
        setChecked={setChecked}
        setPage={setPage}
        setListInOrder={setListInOrder}
      />
      <OrderMobile listInOrder={listInOrder} setListFilter={setListFilter} />
      <Grid container justifyContent="flex-start">
        {dataFilter.map((data, index) => (
          <Grid
            key={index}
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
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
