import { Button, Grid, TextField } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';

export default function Carts() {
  const router = useRouter();
  const handlePush = () => {
    router.push('/checkouts/1');
  };
  return (
    <div className={styles.carts}>
      <div className={styles.breadcrumb_shop}>
        <Link href="/"> Trang chủ</Link> / Liên hệ
      </div>
      <Grid container className={styles.GridCart}>
        <Grid md={8} sm={12} xs={12} item className={styles.GridList}>
          <h3>Giỏ hàng của bạn</h3>
          <div className={styles.listCart}>
            <p className={styles.title_cart}>
              bạn đang có 10 sản phẩm trong giỏ hàng
            </p>
            <div className={styles.boderCarts}>
              <div className={styles.product}>
                <div className={styles.media_image}>
                  <div className={styles.item_image}>
                    <Image src="/cart/sp.png" width={80} height={80} />
                  </div>
                  <div className={styles.item_Remove}>xoá</div>
                </div>
                <div className={styles.media_desc}>
                  <div className={styles.item_info}>
                    Sữa nước Pediasure Nga, 200ml (1-10y)
                  </div>
                  <div className={styles.Characteristics}>vị rượu</div>
                  <div className={styles.item_price}>87,000₫</div>
                </div>
                <div className={styles.media_totla}>
                  <div className={styles.item_price}>87,000₫</div>
                  <div className={styles.item_quatity}>
                    <button>-</button>
                    <div className={styles.amount}>1</div>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.note}>
            <label className={styles.title_label}>Ghi chú đơn hàng</label>
            <textarea rows={5} className={styles.formControl}></textarea>
          </div>
          <div className={styles.invoice}></div>
        </Grid>
        <Grid md={4} sm={12} xs={12} item className={styles.GridPay}>
          <h3>Thông tin đơn hàng</h3>
          <div className={styles.total}>
            <div>Tổng tiền:</div>
            <div className={styles.total_price}>2,545,000₫</div>
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
