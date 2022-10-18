import { Link, Typography } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import LayoutAccount from '../../LayoutAccount';

const MyAccount = () => {
  return (
    <LayoutAccount title={'Tài khoản của tôi'}>
      <div className={styles.inforAccount}>
        <Typography variant="h6" className={styles.subtitle}>
          Thông tin tài khoản
        </Typography>
        <div className={styles.detail}>
          <Typography variant="body1" className={styles.name}>
            Trần quang huy
          </Typography>
          <Typography variant="body2">quanghuy.tipici@gmail.com</Typography>
          <Typography variant="body2">Viet Nam</Typography>
          <Link href="/account/address">Xem địa chỉ</Link>
        </div>
      </div>
      <div className={styles.history}>
        <Typography variant="body2">Bạn chưa mua sản phẩm nào</Typography>
      </div>
    </LayoutAccount>
  );
};

export default MyAccount;
