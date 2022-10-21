import React from 'react';
import LayoutAccount from '../../LayoutAccount';
import styles from './styles.module.scss';
import Order from './Order';
import { Typography } from '@material-ui/core';
const OrderList = ({ orderLists }) => {
  return (
    <LayoutAccount title={'Đơn hàng'}>
      <div className={styles.container}>
        {Object.keys(orderLists).length > 0 ? (
          <>
            {Object.keys(orderLists).map((item, idx) => (
              <Order key={idx} idx={1} code={item} orders={orderLists[item]} />
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
