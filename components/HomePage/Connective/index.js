import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { CardMedia, Container, Grid } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import clsx from 'clsx';
import FormNews from './FormNews';

function Connective({ corpInfor, homepage }) {
  return (
    <div className={styles.connectiveBg}>
      <Container maxWidth="lg">
        <Grid container spacing={1} className={styles.connective}>
          <Grid className={styles.formRegister} item xs={12} sm={6} lg={4}>
            <h2>Đăng ký nhận bảng tin</h2>
            <p>Kết nối với chúng tôi để theo dõi thông tin mới nhất.</p>
            <FormNews />
            {/* <div>
              <input type="text" placeholder="Địa chỉ emai" />
              <button>Đăng ký</button>
            </div> */}
          </Grid>
          {homepage.attributes.brochure !== null && (
            <Grid className={styles.brochure} item xs={12} sm={6} lg={4}>
              <div className={styles.brochureIcon}>
                <a
                  href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.linkBrochure}`}
                >
                  <GetAppIcon className={styles.icon} />
                </a>
              </div>
              <span className={styles.content}>
                <h2>Brochure Công ty</h2>
                <p>{homepage.attributes.brochure}</p>
                <a
                  href={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${homepage.attributes.linkBrochure}`}
                >
                  Tải Brochure
                </a>
              </span>
            </Grid>
          )}
          <Grid className={clsx(styles.contacts)} item xs={12} sm={6} lg={4}>
            <span>
              <h2>Email:</h2>
              <h3>{corpInfor.attributes.email}</h3>
            </span>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Connective;
