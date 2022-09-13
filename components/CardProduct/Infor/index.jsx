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
      <span className={styles.fill}>Màu:</span>
      <span className={styles.fill}>Size:</span>

      <span className={styles.fill}>
        Giá gốc:
        <span className={styles.rating}>4.6</span>
        <span className={styles.from}>UK</span>
        <span className={styles.trademark}>ZARA</span>
      </span>
      <span className={styles.price}>
        <span className={styles.price}>
          190.000 <p>đ</p>{' '}
        </span>
        <a>
          <span className={styles.link}>
            <FaLink className={styles.linkIcon} />
          </span>
        </a>
      </span>
      <span className={clsx(styles.fill, styles.status)}>
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
