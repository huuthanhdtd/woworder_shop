import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Logo from '../../../public/logo_anphu.svg';
import { FaChevronRight } from 'react-icons/fa';
import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import { autoCount } from '../../../lib/Count';

const IntroduceHome = ({ statisticalRef, introduceIntoView }) => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (introduceIntoView === true) {
      setTimeout(() => {
        autoCount(250, 50, 4, setCountOne);
        autoCount(16, 180, 1, setCountTwo);
        autoCount(3500, 100, 100, setCountThree);
      }, 200);
      // const interval = setInterval(() => {
      //   setCountOne((prev) => {
      //     if (prev < 246) {
      //       return prev + 4;
      //     }

      //     if (prev >= 246) {
      //       clearInterval(interval);
      //       return 250;
      //     }
      //   });
      // }, 50);
      // const intervalTwo = setInterval(() => {
      //   setCountTwo((prev) => {
      //     if (prev < 16) {
      //       return prev + 1;
      //     }
      //     if (prev >= 16) {
      //       clearInterval(intervalTwo);
      //       return 16;
      //     }
      //   });
      // }, 180);

      // const intervalThree = setInterval(() => {
      //   setCountThree((prev) => {
      //     if (prev < 3500) {
      //       return prev + 100;
      //     }
      //     if (prev >= 3500) {
      //       clearInterval(intervalThree);
      //       return 3500;
      //     }
      //   });
      // }, 100);
    } else {
      setCountOne(0);
      setCountTwo(0);
      setCountThree(0);
    }
  }, [introduceIntoView]);

  // const statisticalRef = useRef(null)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Giới thiệu</h2>
        </div>
        <div className={styles.logo}>
          <Image src={Logo} />
        </div>
        <p>
          Ân Phú hướng đến là thương hiệu hàng đầu trong ngành Bất động sản.
          Hoạt động trong lĩnh vực môi giới, phân phối, đầu tư các dự án bất
          động sản trên toàn quốc.
        </p>
        <button onClick={() => router.push('/gioi-thieu')}>
          Giới thiệu chi tiết
          <div>
            <FaChevronRight className={styles.rightIcon} />
          </div>
        </button>
        <div></div>
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
