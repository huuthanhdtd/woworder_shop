import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { BsShieldFillPlus } from 'react-icons/bs';
import { RiArrowDownSLine } from 'react-icons/ri';
import { convertCurrency } from '../../../../utils/convertCurrency';
import Product from '../Product';
import styles from './styles.module.scss';
const Order = ({ idx, code, orders }) => {
  const [isLoadmore, setLoadmore] = React.useState({
    isLoad: false,
    idx: null,
  });

  const handleLoadmore = (boolean, index) => {
    setLoadmore({
      isLoad: boolean,
      idx: index,
    });
  };
  const length = orders.length;

  const totalPrice = orders.reduce((prev, curr) => {
    return prev + Number(curr.sellPrice) * curr.quantity;
  }, 0);
  return (
    <div className={styles.orderList}>
      <div className={styles.header}>
        <Typography variant="body2" className={styles.orderCode}>
          {code}
        </Typography>
        {/* <Typography variant="body2" className={styles.status}>
          Đã giao
        </Typography> */}
      </div>
      <div
        className={styles.boxProducts}
        style={{
          height:
            isLoadmore.isLoad && idx === isLoadmore.idx
              ? length * 80
              : length > 2
              ? 170
              : length * 85,
        }}
        suppressHydrationWarning
      >
        {orders.map((it, idx) => (
          <Product key={idx} item={it} />
        ))}
      </div>
      <div className={styles.loadMore}>
        <Button
          variant="outlined"
          className={styles.button}
          onClick={() => handleLoadmore(!isLoadmore.isLoad, idx)}
        >
          <RiArrowDownSLine
            style={{
              transition: 'all .5s ease-out',
              transform:
                isLoadmore.isLoad && isLoadmore.idx === idx
                  ? 'rotate(180deg)'
                  : 'rotate(0deg)',
            }}
          />
        </Button>
      </div>
      <div className={styles.footer}>
        <div className={styles.boxTotal}>
          <BsShieldFillPlus className={styles.icon} />
          <span className={styles.attTotal}>Tổng số tiền:</span>
          <span className={styles.costTotal} suppressHydrationWarning>
            {convertCurrency(totalPrice)}
          </span>
        </div>

        <div className={styles.actions}>
          <Button variant="outlined" className={styles.repurchase}>
            Mua lại
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Order;
