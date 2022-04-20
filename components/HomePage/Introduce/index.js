import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Logo from '../../../public/logo_anphu.svg';
import { FaChevronRight } from 'react-icons/fa';
import { Grid } from '@material-ui/core';

const IntroduceHome = ({ statisticalRef, elementIntoView }) => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);

  useEffect(() => {
    if (elementIntoView === 'gioi-thieu') {
      const interval = setInterval(() => {
        setCountOne((prev) => {
          if (prev < 246) {
            return prev + 4;
          }

          if (prev >= 246) {
            clearInterval(interval);
            return 250;
          }
        });
      }, 50);
      const intervalTwo = setInterval(() => {
        setCountTwo((prev) => {
          if (prev < 16) {
            return prev + 1;
          }
          if (prev >= 16) {
            clearInterval(intervalTwo);
            return 16;
          }
        });
      }, 180);

      const intervalThree = setInterval(() => {
        setCountThree((prev) => {
          if (prev < 3500) {
            return prev + 100;
          }
          if (prev >= 3500) {
            clearInterval(intervalThree);
            return 3500;
          }
        });
      }, 100);
    } else {
      setCountOne(0);
      setCountTwo(0);
      setCountThree(0);
    }
  }, [elementIntoView]);

  // const statisticalRef = useRef(null)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>GIỚI THIỆU</h2>
        </div>
        <div className={styles.logo}>
          <Image src={Logo} />
        </div>
        <p>
          Ân Phú hướng đến là thương hiệu hàng đầu trong ngành Bất động sản.
          Hoạt động trong lĩnh vực môi giới, phân phối, đầu tư các dự án bất
          động sản trên toàn quốc.
        </p>
        <button>
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
        >
          <Grid item md={4} className={styles.item}>
            <h1>{countOne}</h1>
            <h3>Nhân sự trên toàn bộ hệ thống</h3>
          </Grid>
          <Grid item md={4} className={styles.item}>
            <h1>{countTwo}</h1>
            <h3>Dự án đã triển khai thành công</h3>
          </Grid>
          <Grid item md={4} className={styles.item}>
            <h1>{countThree}</h1>
            <h3>Sản phẩm đã giao dịch thành công</h3>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default IntroduceHome;
