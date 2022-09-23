import { Grid } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles.module.scss';

export default function Introduce() {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.introduce}>
      <div className={styles.breadcrumb_shop}>
        <Link href="/"> Trang chủ</Link>
        {router.asPath}
      </div>
      <div className={styles.about1_introduce}>
        <div className={styles.title_page}>
          <p>HAPPY MOMMY</p>
          <h2>VỀ CHÚNG TÔI</h2>
        </div>
        <Grid container className={styles.sitebox_content}>
          <Grid item className={styles.content} md={6} sm={6} xs={12}>
            Được thành lập vào năm 2016, Happy Mommy chuyên cung cấp các mặt
            hàng cho mẹ và bé chuẩn nội địa các nước, kèm bill, bay air với
            slogan “MUA LẺ VỚI GIÁ SỈ".
          </Grid>
          <Grid item className={styles.content} md={6} sm={6} xs={12}>
            Happy Mommy cũng chính là mục đích kinh doanh của chúng tôi, mong
            muốn mỗi sản phẩm và tư vấn mà chúng tôi mang đến sẽ giúp cho mỗi
            người mẹ được hạnh phúc một cách trọn vẹn.
          </Grid>
          <Grid item md={6} sm={6} xs={12} className={styles.image}></Grid>
          <Grid item md={6} sm={6} xs={12} className={styles.commit}></Grid>
        </Grid>
      </div>
    </div>
  );
}
