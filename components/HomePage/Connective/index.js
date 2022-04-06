import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Container, Grid } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import clsx from 'clsx';

function Connective() {
  return (
    <Container maxWidth="lg">
      <div className={styles.connective}>
        <Grid className={styles.formRegister} item xs={12} sm={6} lg={4}>
          <h2>Đăng ký nhận bảng tin</h2>
          <p>Kết nối với chúng tôi để theo dõi thông tin mới nhất.</p>
          <div>
            <input type="text" placeholder="Địa chỉ emai" />
            <button>Đăng ký</button>
          </div>
        </Grid>
        <Grid className={styles.brochure} item xs={12} sm={6} lg={4}>
          <div className={styles.brochureIcon}>
            <GetAppIcon className={styles.icon} />
          </div>
          <span className={styles.content}>
            <h2>Brochure Công ty</h2>
            <p>
              Download Bruchure mới nhất của Novaland để hiểu rõ hơn về chứng
              tôi
            </p>
            <a href="#">Tải Brochure</a>
          </span>
        </Grid>
        <Grid className={clsx(styles.contacts)} item xs={12} sm={6} lg={4}>
          <span>
            <h2>Tổng đài CSKH:</h2>
            <h3>1900 63 6666</h3>
          </span>
          <span>
            <h2>Email:</h2>
            <h3>chamsockhachang@novaland.com</h3>
          </span>
        </Grid>
      </div>
    </Container>
  );
}

export default Connective;
