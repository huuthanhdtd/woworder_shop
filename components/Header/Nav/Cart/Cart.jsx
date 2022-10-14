import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { IoMdArrowDropup } from 'react-icons/io';
import { Button } from '@material-ui/core';
import { useCart } from 'react-use-cart';
import { BsCart } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useWindowSize } from 'react-use';
import { convertCurrency } from '../../../../utils/convertCurrency';
import ItemCart from './ItemCart';

export default function Cart({ openCart, setOpenCart }) {
  const { height, width } = useWindowSize();
  const router = useRouter();
  const { items, totalItems, cartTotal, updateItemQuantity, removeItem } =
    useCart();
  const [he, setHe] = useState();
  const [wid, setWid] = useState();
  const handlePushCart = () => {
    router.push({
      pathname: '/cart',
    });
    setOpenCart(false);
  };
  useEffect(() => {
    setHe(height);
    setWid(width);
  }, [height, width]);

  return (
    <div
      className={clsx(styles.showCart, {
        [styles.active]: openCart === true,
      })}
    >
      <div className={styles.dropUp}>
        <IoMdArrowDropup />
      </div>
      <div className={styles.cart}>
        <div className={styles.taskName}>
          <div className={styles.name}>GIỎ HÀNG</div>
          <div className={styles.totalProduct}>Giỏ hàng</div>
          <div className={styles.totalPrice}>{totalItems} sản phẩm</div>
          <div className={styles.close} onClick={() => setOpenCart(false)}>
            Đóng
          </div>
        </div>
        <div
          className={styles.viewMobile}
          style={{ height: wid <= 600 ? `calc(${he}px - 130px) ` : `unset` }}
        >
          {items.length > 0 ? (
            <>
              {items.map((data, index) => (
                <ItemCart
                  data={data}
                  index={index}
                  updateItemQuantity={updateItemQuantity}
                  removeItem={removeItem}
                />
              ))}
            </>
          ) : (
            <div className={styles.empty}>
              <div className={styles.icon}>
                <BsCart />
              </div>
              <span>Hiện chưa có sản phẩm</span>
            </div>
          )}
        </div>
        <div className={styles.totalPrice}>
          <span>TỔNG TIỀN:</span>
          <span className={styles.total}> {convertCurrency(cartTotal)} </span>
        </div>
        <div className={styles.viewsAll}>
          <Button onClick={handlePushCart}>
            <span>Xem Giỏ hàng</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
