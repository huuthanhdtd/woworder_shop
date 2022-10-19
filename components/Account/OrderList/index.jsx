import React from 'react';
import LayoutAccount from '../../LayoutAccount';
import styles from './styles.module.scss';
import Order from './Order';
import { Typography } from '@material-ui/core';
const OrderList = ({ items, cartTotal }) => {
  return (
    <LayoutAccount title={'Đơn hàng'}>
      <div className={styles.container}>
        {items.length > 0 ? (
          <>
            {Array.from({ length: 3 }).map((it, idx) => (
              <Order key={idx} idx={1} items={items} cartTotal={cartTotal} />
            ))}
          </>
        ) : (
          <Typography variant="body2">Bạn chưa mua sản phẩm nào</Typography>
        )}
      </div>
    </LayoutAccount>
  );
};

export default OrderList;
