import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import NextImage from './imageLogo';
import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import { autoCount } from '../../../lib/Count';
import { ImCircleRight } from 'react-icons/im';
import 'aos/dist/aos.css';
import RenderImage from '../SelectSizeImg';
import { useWindowSize } from 'react-use';
import Aos from 'aos';

const IntroduceHome = ({ statisticalRef, introduceIntoView, homepage }) => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const router = useRouter();

  const { width } = useWindowSize();

  useEffect(() => {
    Aos.init({ duration: 1000 });

    if (introduceIntoView === true) {
      setTimeout(() => {
        autoCount(homepage.attributes.personnel, 50, 4, setCountOne);
        autoCount(homepage.attributes.project, 180, 1, setCountTwo);
        autoCount(homepage.attributes.product, 100, 100, setCountThree);
      }, 200);
      return () => clearTimeout();
    } else {
      setCountOne(0);
      setCountTwo(0);
      setCountThree(0);
    }
  }, [introduceIntoView]);

  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <RenderImage
          data={homepage.attributes.background}
          heightImg={1904 * 0.6}
          widthImg={1904}
        />
      </div>
      <div className={styles.wrapper}>
        <div
          className={styles.title}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h2>Giới thiệu</h2>
        </div>
        <div className={styles.logo}>
          <NextImage image={homepage.attributes.logo} />
        </div>
        <p>{homepage.attributes.seo.metaDescription}</p>
        <button onClick={() => router.push('/gioi-thieu')}>
          Giới thiệu chi tiết
          <ImCircleRight className={styles.rightIcon} />
        </button>
        <Grid
          container
          className={styles.statistical}
          ref={statisticalRef}
          id="statisticalId"
          spacing={2}
        >
          <Grid item xs={12} md={4} className={styles.item}>
            <div>
              <h1>{countOne}</h1>
              <h3>Nhân sự trên toàn bộ hệ thống</h3>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={styles.item}>
            <div>
              <h1>{countTwo}</h1>
              <h3>Dự án đã triển khai thành công</h3>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={styles.item}>
            <div>
              <h1>{countThree}</h1>
              <h3>Sản phẩm đã giao dịch thành công</h3>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default IntroduceHome;
