import React from 'react';
import styles from './page3.module.scss';

export default function Page3() {
  return (
    <div className={styles.page3} id="gia-tri">
      <h2>GIÁ TRỊ CỐT LÕI</h2>
      <div className={styles.page3_about}>
        <p>HIỆU QUẢ - CHÍNH TRỰC - CHUYÊN NGHIỆP</p>
      </div>
      <div className={styles.banner}>
        <img
          src="https://www.novaland.com.vn/Data/Sites/1/News/529/gioithieu-2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
