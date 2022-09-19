import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { IoMdArrowDropup } from 'react-icons/io';
import Image from 'next/image';
import { Button } from '@material-ui/core';

export default function Cart({ openCart, setOpenCart }) {
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
          <div className={styles.totalProduct}>2 sản phẩm</div>
          <div className={styles.totalPrice}>622,000</div>
          <div className={styles.close} onClick={() => setOpenCart(false)}>
            Đóng
          </div>
        </div>
        <div className={styles.viewMobile}>
          <div className={styles.viewCart}>
            <div className={styles.image}>
              <Image src="/cart/sp.png" width={85} height={85} />
            </div>
            <div className={styles.desc}>
              <span className={styles.nameProduct}>
                Nước rửa bình vs hoa quả K-mom dạng gói chiết xuất từ thảo mọc
                tự nhiên 500ml
              </span>
              <div className={styles.quantity}>
                <div className={styles.quantity_selector}>
                  <button className={styles.plus_or_minus}>-</button>
                  <div className={styles.amount}>1</div>
                  <button className={styles.plus_or_minus}>+</button>
                </div>
                <div className={styles.price}>125,000vnd</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.totalPrice}>
          <span>TỔNG TIỀN:</span>
          <span className={styles.total}>125,000nvd</span>
        </div>
        <div className={styles.viewsAll}>
          <Button>Xem Giỏ hàng</Button>
        </div>
      </div>
    </div>
  );
}
