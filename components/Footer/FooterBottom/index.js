import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Container, Grid } from '@material-ui/core';

import {
  FaTiktok,
  FaFacebookF,
  FaYoutubeSquare,
  FaInstagram,
} from 'react-icons/fa';
import clsx from 'clsx';

function FooterBottom() {
  return (
    <Container maxWidth="lg">
      <div className={styles.footerLast}>
        <Grid className={styles.footerLastContent} item xs={12} sm={12} lg={8}>
          <p>Chính sách bảo mật</p>
          <p>CÔNG TY CỔ PHẦN ĐẦU TƯ - PHÁT TRIỂN ĐÔ THỊ ÂN PHÚ</p>
          <p>
            Giấy chứng nhận đăng ký doanh nghiệp số 4000440174 do Sở Kế hoạch và
            Đầu tư Tỉnh Quảng Nam cấp lần đầu ngày 07/04/2006
          </p>
          <p>
            Địa chỉ: 28 Phan Bội Châu, Phường Hòa Thuận, Thành phố Tam Kỳ, Tỉnh
            Quảng Nam
          </p>
        </Grid>
        <Grid className={styles.footerLastIcon} item xs={12} sm={12} lg={4}>
          <span className={styles.footerLastIconTop}>
            <FaFacebookF className={clsx(styles.icon, styles.iconFb)} />
            <FaYoutubeSquare className={clsx(styles.icon, styles.iconYt)} />
            <FaInstagram className={clsx(styles.icon, styles.iconIns)} />
            <FaTiktok className={clsx(styles.icon, styles.iconTiktok)} />
          </span>
        </Grid>
      </div>
    </Container>
  );
}

export default FooterBottom;
