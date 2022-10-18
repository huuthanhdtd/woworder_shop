import { Typography } from '@material-ui/core';
import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { BsCheckSquareFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import styles from './styles.module.scss';
import clsx from 'clsx';

const Notify = ({ isNotify }) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.hidden]: isNotify,
      })}
    >
      <div className={styles.boxNotify}>
        <div className={styles.header}>
          <BsCheckSquareFill className={styles.iconCheck} />
        </div>
        <div className={styles.content}>
          <Typography variant="body2">Bạn đã đặt hàng thành công</Typography>
          <div className={styles.routes}>
            <Link href={'/'}>
              <div className={styles.wrapRoute}>
                <Typography variant="body2" className={styles.linkName}>
                  Trang chủ
                </Typography>
                <AiTwotoneHome className={styles.iconRoute} />
              </div>
            </Link>
            <Link href={'/account'}>
              <div className={styles.wrapRoute}>
                <Typography variant="body2" className={styles.linkName}>
                  Tài khoản
                </Typography>
                <FaUserCircle className={styles.iconRoute} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notify;
