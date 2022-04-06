import React from 'react';
import PauseOnHover from './slick';
import styles from './page4.module.scss';

export default function Page6() {
  return (
    <div className={styles.page4}>
      <h2>LỊCH SỬ PHÁT TRIỂN</h2>
      <PauseOnHover />
      <div className={styles.banner}>
        <img
          src="https://www.novaland.com.vn/Data/Sites/1/News/24/02-gioithieu.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
