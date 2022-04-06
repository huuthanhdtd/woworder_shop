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
          <p>CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NO VA</p>
          <p>
            Giấy chứng nhận đăng ký doanh nghiệp số 0301444753 do Sở Kế hoạch và
            Đầu tư TP.HCM cấp lần đầu ngày 18/09/1992
          </p>
          <p>
            Tòa nhà văn phòng Novaland, 65 Nguyễn Du, P.Bến Nghé, Quận 1, TP.
            HCM - ĐT: (84) 906 35 38 38 - Hotline:1900 63 6666
          </p>
          <p>
            © 2016. Bản quyền thuộc về Tập đoàn Novaland (Việt Nam). Tất cả các
            quyền được bảo hộ.
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
