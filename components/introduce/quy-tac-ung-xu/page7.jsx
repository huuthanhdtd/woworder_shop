import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './page7.module.scss';
import Aos from 'aos';

export default function Page7() {
  // useEffect(() => {
  //   Aos.init({
  //     easing: 'ease-in-sine',
  //     offset: 0,
  //   });
  // }, []);
  return (
    <section>
      <div className={styles.rule}>
        <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
          bộ quy tắc ứng xử
        </h2>
        <Grid container spacing={2}>
          <Grid
            data-aos="fade-left"
            data-aos-duration="500"
            data-delay="500"
            item
            sm={12}
            md={12}
            lg={2}
          >
            <div className={styles.all}>
              <Link href="/">
                <img src="/gioi-thieu/icon.png" alt="" />
              </Link>
            </div>
          </Grid>
          <Grid
            data-aos="fade-right"
            data-aos-duration="500"
            data-delay="500"
            item
            sm={12}
            md={12}
            lg={10}
          >
            <p>
              Mỗi một doanh nghiệp đều có một nét văn hoá riêng. Tại Novaland,
              HĐQT và Ban Điều hành có trách nhiệm chăm lo cho nhân viên. Từng
              nhân viên có trách nhiệm chăm lo cho khách hàng thể hiện qua sản
              phẩm và dịch vụ khách hàng. Novaland là một đội ngũ chuyên nghiệp
              có tính nhất quán cao. Mọi ứng xử đều phải theo quy tắc ứng xử.
              Mọi người đều có quyền tự do của mình nhưng không được làm ảnh
              hưởng đến người khác.
            </p>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
