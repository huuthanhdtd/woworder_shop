import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { FaLink } from 'react-icons/fa';
import { BsBagPlus } from 'react-icons/bs';
import { Button, Typography } from '@material-ui/core';
function Infor() {
  return (
    <div className={styles.infor}>
      <Typography variant="h3" className={styles.name}>
        Blackmores Celery 3000mg Mild Ache Relief 50 Tablets
      </Typography>
      <span className={styles.atb}>
        Màu: <p className={styles.atbValues}>Dusty rose/Unicorns</p>
      </span>
      <span className={styles.atb}>
        Size: <p className={styles.atbValues}> XS/S/M/L/XL/XXL</p>
      </span>

      <span className={styles.atb} style={{ margin: '5px 0' }}>
        Giá gốc:
        <span className={styles.rating}>4.6</span>
        {/* <span className={styles.from}>UK</span> */}
        <span className={styles.trademark}>ZARA</span>
      </span>
      <span className={styles.price}>
        <span className={styles.prevPrice}>
          190.000 <small>đ</small>
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
      <div className={styles.boxButton}>
        <Button className={styles.button}>
          <span className={styles.iconAdd}>
            <BsBagPlus size={14} />
          </span>
          <span className={styles.label}>Chọn mua</span>
        </Button>
      </div>
    </div>
  );
}

export default Infor;
