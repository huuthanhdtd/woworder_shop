import React from 'react';
import { useCart } from 'react-use-cart';
import LayoutAccount from '../LayoutAccount';
import styles from './styles.module.scss';
import Order from './Order';
const OrderList = () => {
  const { items, cartTotal } = useCart();

  return (
    <LayoutAccount title={'Đơn hàng'}>
      {items.length > 0 && (
        <div className={styles.container}>
          {Array.from({ length: 3 }).map((it, idx) => (
            <Order key={idx} idx={idx} items={items} cartTotal={cartTotal} />
          ))}
        </div>
      )}
    </LayoutAccount>
  );
};

export default OrderList;
