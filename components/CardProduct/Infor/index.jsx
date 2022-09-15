import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { FaLink } from 'react-icons/fa';
function Infor() {
  return (
    <div className={styles.infor}>
      <h3 className={styles.name}>
        https://img5.thuth uatphanmem.v n/uploads/2021/11/2
      </h3>
      <span className={styles.atb}>
        Màu: <p className={styles.atbValues}>Đỏ Cam Vàng Lục Lam Chàm Tím</p>
      </span>
      <span className={styles.atb}>
        Size: <p className={styles.atbValues}>Siêu to khổng lồ</p>
      </span>

      <span className={styles.atb} style={{ margin: '5px 0' }}>
        Giá gốc:
        <span className={styles.rating}>4.6</span>
        <span className={styles.from}>UK</span>
        <span className={styles.trademark}>ZARA</span>
      </span>
      <span className={styles.price}>
        <span className={styles.price}>
          <p className={styles.prevPrice}>300.000</p> 190.000 <p>đ</p>{' '}
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=0uDRsIYJ5X4&ab_channel=FendiMusic"
        >
          <span className={styles.link}>
            <FaLink className={styles.linkIcon} />
          </span>
        </a>
      </span>
      <span className={clsx(styles.atb, styles.status)}>
        <span>
          Tồn kho: <span className={styles.qty}>-5</span>
        </span>
        <span>
          Đã bán: <span className={styles.qty}>20</span>
        </span>
      </span>
    </div>
  );
}

export default Infor;
