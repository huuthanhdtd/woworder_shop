import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { IoMdArrowDropup } from 'react-icons/io';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import { useCart } from 'react-use-cart';
import { BsCart } from 'react-icons/bs';
import { convertCurrency } from '../../../utils/convertCurrency';
import { useRouter } from 'next/router';

export default function Cart({ openCart, setOpenCart }) {
  const router = useRouter();
  const { items, totalItems, cartTotal, updateItemQuantity, removeItem } =
    useCart();
  const handlePushCart = () => {
    router.push({
      pathname: '/cart',
    });
    setOpenCart(false);
  };
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
          <div className={styles.totalProduct}>{totalItems} sản phẩm</div>
          <div className={styles.totalPrice}>{convertCurrency(cartTotal)}</div>
          <div className={styles.close} onClick={() => setOpenCart(false)}>
            Đóng
          </div>
        </div>
        <div className={styles.viewMobile}>
          {items.length > 0 ? (
            <>
              {items.map((data, index) => (
                <div className={styles.viewCart} key={index}>
                  <div className={styles.image}>
                    <img src={data.imageUrl} />
                  </div>
                  <div className={styles.desc}>
                    <span className={styles.nameProduct}>
                      {data.name.length > 150
                        ? `${data.name.slice(0, 150)}...`
                        : data.name}
                    </span>
                    <div className={styles.quantity}>
                      <div className={styles.quantity_selector}>
                        <button
                          className={styles.plus_or_minus}
                          onClick={() =>
                            updateItemQuantity(data.id, data.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <div className={styles.amount}>{data.quantity}</div>
                        <button
                          className={styles.plus_or_minus}
                          onClick={() =>
                            updateItemQuantity(data.id, data.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className={styles.price}>
                        {convertCurrency(data.price)}
                      </div>
                    </div>
                    <div
                      className={styles.remove}
                      onClick={() => removeItem(data.id)}
                    >
                      X
                    </div>
                  </div>
                </div>
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
