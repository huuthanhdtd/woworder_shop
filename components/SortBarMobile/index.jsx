import { Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { orderPrice, orderButton } from '../../constants/commonData';
import SortPrice from './SortPrice';
import SortWeb from './SortWeb';
import styles from './styles.module.scss';

const SortBarMobile = ({
  setSortPriceType,
  open,
  setOpen,
  setFormPrice,
  category,
  setChecked,
}) => {
  const filterConstant = orderButton.concat(orderPrice);
  const [filters, setFilters] = React.useState({
    webs: [],
    inOrder: null,
    prices: { priceFirst: '', priceLast: '' },
  });

  const { webs, inOrder, prices } = filters;

  const handleOrder = (type) => {
    setFilters({ ...filters, inOrder: type.type });
  };

  const handleApplyFilter = () => {
    setSortPriceType(inOrder);
    setFormPrice(prices);
    setChecked(webs);
    setOpen(!open);
  };

  const handleResetFilters = () => {
    setFilters({
      webs: [],
      inOrder: null,
      prices: { priceFirst: '', priceLast: '' },
    });
  };
  return (
    <>
      <div
        className={clsx(styles.boxFilter)}
        style={{
          zIndex: open ? 1200 : -1,
          opacity: open ? 1 : 0,
          transitionDelay: open ? '0s' : '0.7s',
        }}
        onClick={() => setOpen(!open)}
      ></div>
      <div
        className={clsx(styles.container)}
        style={{
          transform: open ? 'translateX(0%)' : 'translateX(100%)',
        }}
      >
        <Typography variant="h6" className={styles.title}>
          Bộ lọc tìm kiếm
        </Typography>
        <SortWeb
          setFilters={setFilters}
          filters={filters}
          category={category}
        />
        <SortPrice setFilters={setFilters} filters={filters} />
        <div className={styles.inOrder}>
          <Typography variant="h6" className={styles.typeTitle}>
            Sắp xếp
          </Typography>
          <div className={styles.types}>
            {filterConstant.map((it, idx) => (
              <Button
                key={idx}
                className={clsx(styles.button, {
                  [styles.active]: filters.inOrder === it.type,
                })}
                onClick={() => handleOrder(it)}
              >
                {it.name}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.btnApply}>
          <Button
            variant="contained"
            className={styles.reset}
            onClick={handleResetFilters}
          >
            Thiết lập lại
          </Button>
          <Button
            variant="contained"
            className={styles.btn}
            onClick={handleApplyFilter}
          >
            Áp dụng
          </Button>
        </div>
      </div>
    </>
  );
};

export default SortBarMobile;
