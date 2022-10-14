import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
} from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import { convertCurrency } from '../../utils/convertCurrency';
import Loading from '../Loading';
import GridList from './GridList';
import styles from './styles.module.scss';

export default function Carts() {
  const router = useRouter();
  const {
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    updateItem,
  } = useCart();
  const [checked, setChecked] = useState([]);
  const [total, setTotal] = useState([]);
  const handlePush = () => {
    if (items.length > 0) {
      router.push({
        pathname: '/checkouts/1',
      });
    } else {
      return;
    }
  };
  const filprice = items.filter((item) => item.isCheck === true);
  useEffect(() => {
    const filprices = filprice.map((data) => data.price);
    const filamount = filprice.map((data) => data.quantity);
    let sum = 0;
    for (let i = 0; i < filprices.length; i++) {
      Number(filprices[i]);
      sum += Number(filprices[i] * filamount[i]);
    }
    setTotal(sum);
  }, [checked, cartTotal, items]);

  return (
    <div className={styles.carts}>
      <div className={styles.breadcrumb_shop}>
        <Link href="/"> Trang chủ</Link> / Giỏ hàng
      </div>
      <Grid container className={styles.GridCart}>
        <Grid md={8} sm={12} xs={12} item className={styles.GridList}>
          <GridList
            items={items}
            totalItems={totalItems}
            checked={checked}
            removeItem={removeItem}
            setChecked={setChecked}
            updateItemQuantity={updateItemQuantity}
            updateItem={updateItem}
          />
        </Grid>
        <Grid md={4} sm={12} xs={12} item className={styles.GridPay}>
          <h3>Thông tin đơn hàng</h3>
          <div className={styles.total}>
            <div>Tổng tiền:</div>
            <div className={styles.total_price}>{convertCurrency(total)}</div>
          </div>
          <ul className={styles.information}>
            <li>
              Phí vận chuyển sẽ được tính ở trang thanh toán. Sau khi bạn nhập
              địa chỉ giao hàng.
            </li>
            <li>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</li>
          </ul>
          <Button className={styles.pay} onClick={handlePush}>
            Thanh toán
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
