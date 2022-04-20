import React, { useEffect } from 'react';
import PauseOnHover from './slick';
import styles from './page4.module.scss';
import Aos from 'aos';

export default function Page6() {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, []);

  return (
    <div className={styles.page4}>
      <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
        LỊCH SỬ PHÁT TRIỂN
      </h2>
      <PauseOnHover />
      <div className={styles.banner}></div>
    </div>
  );
}
