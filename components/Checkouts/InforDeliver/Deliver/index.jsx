import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { RiCheckboxBlankCircleFill, RiInboxArchiveLine } from 'react-icons/ri';
import styles from './styles.module.scss';

const Delivery = ({ deliver, data }) => {
  return (
    <div className={styles.wrapper}>
      {deliver === 'local' ? (
        <>
          <Typography className={styles.caption}>Chi nhánh còn hàng</Typography>

          <div className={clsx(styles.addressLocal, styles.border)}>
            <RiCheckboxBlankCircleFill
              className={clsx(styles.iconCircle, styles.activeDeliver)}
            />
            <strong>{`92 Nguyễn Du: `}</strong>
            <small>92 Nguyễn Du, Quận Hải Châu, Đà Nẵng</small>
          </div>
        </>
      ) : (
        <>
          <Typography className={styles.caption}>
            Phương thức vận chuyển
          </Typography>
          {data.wards ? (
            <div className={clsx(styles.border, styles.deliverCharges)}>
              <Typography variant="h5" className={clsx(styles.text)}>
                <RiCheckboxBlankCircleFill
                  className={clsx(styles.iconCircle, styles.activeDeliver)}
                />
                GIAO TIÊU CHUẨN từ 1-5 ngày
              </Typography>
              {/* <Typography variant="body2" className={styles.text}>
                25.000 <sup>đ</sup>
              </Typography> */}
            </div>
          ) : (
            <div className={clsx(styles.border, styles.deliverBox)}>
              <RiInboxArchiveLine className={styles.iconBox} />
              <Typography className={styles.description}>
                Vui lòng chọn
                {data.districts === null
                  ? ' tỉnh / thành '
                  : data.wards === null
                  ? ' quận / huyện '
                  : ''}
                để có danh sách phương thức vận chuyển.
              </Typography>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Delivery;
