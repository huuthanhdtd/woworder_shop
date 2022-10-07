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
import styles from './styles.module.scss';

export default function Carts() {
  const router = useRouter();
  const {
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    setCartMetadata,
  } = useCart();
  const [checked, setChecked] = useState([]);
  const [total, setTotal] = useState([]);
  const handlePush = () => {
    if (items.length > 0) {
      router.push({
        pathname: '/checkouts/1',
      });
      setCartMetadata({ notes: checked });
    } else {
      return;
    }
  };
  const handleChange1 = (isChecked) => {
    if (isChecked) return setChecked(items.map((data) => data.id));
    else setChecked([]);
  };

  const handleChange2 = (isChecked, id) => {
    const index = checked.indexOf(id);
    if (isChecked) return setChecked((state) => [...state, id]);

    if (!isChecked && index > -1)
      return setChecked((state) => {
        state.splice(index, 1);
        return JSON.parse(JSON.stringify(state));
      });
  };
  const filprice = items.filter((item) => checked.includes(item.id));
  useEffect(() => {
    handleChange1(true);
  }, []);
  useEffect(() => {
    const filprices = filprice.map((data) => data.price);
    const filamount = filprice.map((data) => data.quantity);
    let sum = 0;
    for (let i = 0; i < filprices.length; i++) {
      Number(filprices[i]);
      sum += Number(filprices[i] * filamount[i]);
    }
    setTotal(sum);
  }, [checked, cartTotal]);
  return (
    <div className={styles.carts}>
      <div className={styles.breadcrumb_shop}>
        <Link href="/"> Trang chủ</Link> / Giỏ hàng
      </div>
      <Grid container className={styles.GridCart}>
        <Grid md={8} sm={12} xs={12} item className={styles.GridList}>
          <h3>Giỏ hàng của bạn</h3>
          {items.length > 0 ? (
            <div className={styles.listCart}>
              <p className={styles.title_cart}>
                bạn đang có{' '}
                <strong style={{ color: '#000' }}>{totalItems} sản phẩm</strong>{' '}
                trong giỏ hàng
              </p>
              <div className={styles.boderCarts}>
                <FormControlLabel
                  label="Tất cả"
                  control={
                    <Checkbox
                      size="small"
                      checked={checked.length === items.length}
                      // indeterminate={
                      //   checked.length !== items.items && checked.length > 0
                      // }
                      onChange={(event) => handleChange1(event.target.checked)}
                    />
                  }
                />
                {items?.map((data, index) => (
                  <div className={styles.product} key={index}>
                    <Box>
                      {checked && (
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="small"
                              checked={checked.includes(data.id)}
                              onChange={(event) =>
                                handleChange2(event.target.checked, data.id)
                              }
                              inputProps={{ 'aria-label': 'controlled' }}
                            />
                          }
                        />
                      )}
                    </Box>
                    <div className={styles.media_image}>
                      <div className={styles.item_image}>
                        <img src={data.imageUrl} />
                      </div>
                      <div
                        className={styles.item_Remove}
                        onClick={() => removeItem(data.id)}
                      >
                        xoá
                      </div>
                    </div>
                    <div className={styles.media_desc}>
                      <div className={styles.item_info}>{data.name}</div>
                      <div className={styles.Characteristics}>...</div>
                      <div className={styles.item_price}>
                        {convertCurrency(data.price)}
                      </div>
                    </div>
                    <div className={styles.media_totla}>
                      <div className={styles.item_price}>
                        {convertCurrency(data.price)}
                      </div>
                      <div className={styles.item_quatity}>
                        <button
                          onClick={() =>
                            updateItemQuantity(data.id, data.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <div className={styles.amount}>{data.quantity}</div>
                        <button
                          onClick={() =>
                            updateItemQuantity(data.id, data.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.note}>
                <label className={styles.title_label}>Ghi chú đơn hàng</label>
                <textarea rows={5} className={styles.formControl}></textarea>
              </div>
              <div className={styles.invoice}></div>
            </div>
          ) : (
            <div
              style={{
                fontSize: '17px',
                margin: '0',
                padding: '20px 16px',
                textAlign: 'left',
              }}
            >
              Giỏ hàng của bạn đang trống
            </div>
          )}
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
