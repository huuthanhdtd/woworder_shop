import React from 'react';
import styles from './Page2.module.scss';

export default function Page2() {
  return (
    <div className={styles.page2}>
      <h2>TẦM NHÌN - SỨ MỆNH</h2>
      <div className={styles.page2_about}>
        <div className={styles.mrb10}></div>
        <div className={styles.vision}>
          <p>
            <span>Tầm nhìn</span>
          </p>
          <hr />
          <p>Novaland là Nhà phát triển Bất động sản hàng đầu Việt Nam: </p>
          <p>- Bất động sản Công nghiệp</p>
          <p>- Bất động sản Du lịch</p>
          <p>- Bất động sản Công nghiệp</p>
        </div>
        <div className={styles.mission}>
          <p>
            <span>Sứ mệnh</span>
          </p>
          <hr />
          <p>- Bất động sản Đô thị</p>
          <p>- Xây dựng điểm đến</p>
          <p>- Vun đắp niềm vui</p>
        </div>
        <div className={styles.mrb10}></div>
      </div>
    </div>
  );
}
