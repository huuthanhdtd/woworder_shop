import { Typography } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import LayoutAccount from '../../LayoutAccount';
import Link from 'next/link';

const MyAccount = ({ user, detail }) => {
  return (
    <LayoutAccount title={'Tài khoản của tôi'}>
      <div className={styles.inforAccount}>
        <Typography variant="h6" className={styles.subtitle}>
          Thông tin tài khoản
        </Typography>
        <div className={styles.detail}>
          <Typography variant="body1" className={styles.name}>
            {user.name}
          </Typography>
          <Typography variant="body1" className={styles.name}>
            {user.phone}
          </Typography>
          <Typography variant="body1" className={styles.name}>
            {detail.address}
          </Typography>
          <Link href={user.facebook}>{user.facebook}</Link>
          <Typography variant="body2"></Typography>
          {/* <Link href="/account/address">Xem địa chỉ</Link> */}
        </div>
      </div>
      {/* <div className={styles.history}>
        <Typography variant="body2">Bạn chưa mua sản phẩm nào</Typography>
      </div> */}
    </LayoutAccount>
  );
};

export default MyAccount;
