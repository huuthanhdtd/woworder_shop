import React from 'react';
import LayoutAccount from '../../LayoutAccount';
import styles from './styles.module.scss';
import Order from './Order';
const OrderList = ({ items, cartTotal }) => {
  return (
    <LayoutAccount title={'Đơn hàng'}>
      <div className={styles.container}>
        {Array.from({ length: 3 }).map((it, idx) => (
          <Order key={idx} idx={1} items={items} cartTotal={cartTotal} />
        ))}
      </div>
    </LayoutAccount>
  );
};

export default OrderList;
