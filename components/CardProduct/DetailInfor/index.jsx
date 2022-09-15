import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { FaLink } from 'react-icons/fa';
const lists = [
  'Giá gốc',
  'Giá lẻ',
  'Tiền cân',
  'Tổng cộng',
  'Tổng số đã bán',
  'Tổng số đã giao hàng',
  'Tổng số chưa giao hàng',
  'Tổng số chưa về VN',
  'Tồn kho',
];
function DeatailInfor({ isDetail }) {
  return (
    <div
      className={clsx(styles.infor, {
        [styles.active]: isDetail,
      })}
    >
      <h3 className={styles.name}>
        https://img5.thuth uatphanmem.v n/uploads/2021/11/2
      </h3>
      <span className={styles.atb}>Màu:</span>
      <span className={styles.atb}>Size:</span>
      <span className={styles.btns}>
        <span className={styles.from}>UK</span>
        <span className={styles.trademark}>ZARA</span>
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
      {lists.map((item) => (
        <div key={item} className={styles.inforItem}>
          <span className={styles.text}>{`${item}:`}</span>
          <span className={styles.text}>123542</span>
        </div>
      ))}
    </div>
  );
}

export default DeatailInfor;
