import { Button, Modal, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import { BsDot } from 'react-icons/bs';
import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import styles from './styles.module.scss';
import discount from '../../../assets/image/discount.svg';

const ModalCheckouts = ({
  isPopup,
  handleShowPopup,
  handleShowDetail,
  handleChooseCoupon,
  coupons,
  showDetail,
}) => {
  return (
    <Modal
      className={styles.wrapper}
      open={isPopup}
      onClose={handleShowPopup}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={styles.popup}>
        <Typography variant="h6" className={styles.title}>
          Chọn giảm giá
          <Button
            variant="outlined"
            className={styles.close}
            onClick={handleShowPopup}
          >
            <MdClose />
          </Button>
        </Typography>
        <div className={styles.listCoupon}>
          <Typography variant="subtitle1" className={styles.typeCoupon}>
            Mã giảm giá của shop
          </Typography>
          {coupons.map((cou, idx) => (
            <div key={idx} className={styles.coupon}>
              <div className={styles.expired}>
                <Image src={discount} width={20} height={20} />
                <div className={styles.content}>
                  <Typography variant="body2" className={styles.name}>
                    {cou.name}
                  </Typography>
                  <Typography variant="body2" className={styles.date}>
                    HSD: {cou.expired}
                  </Typography>
                </div>
              </div>
              <Typography variant="body2" className={styles.description}>
                <BsDot />
                {cou.discounts[0].des}
              </Typography>
              {showDetail ? (
                <>
                  {cou.discounts.slice(1).map((it, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      className={styles.description}
                    >
                      <BsDot />
                      {it.des}
                      {/* Tối đa 50,000 <sup>₫</sup> */}
                    </Typography>
                  ))}
                </>
              ) : (
                ''
              )}
              <div className={styles.applyBox}>
                <Button
                  vairant="text"
                  className={styles.detail}
                  onClick={handleShowDetail}
                >
                  {!showDetail ? 'Xem chi tiết' : 'Thu gọn'}
                  {!showDetail ? (
                    <MdKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowUp />
                  )}
                </Button>
                <Button
                  variant="contained"
                  className={styles.accept}
                  onClick={() => handleChooseCoupon(cou)}
                >
                  Áp dụng
                </Button>
              </div>
            </div>
          ))}

          <Typography variant="subtitle1" className={styles.typeCoupon}>
            Mã giảm giá của bạn
          </Typography>
          {coupons.map((cou, idx) => (
            <div key={idx} className={styles.coupon}>
              <div className={styles.expired}>
                <Image src={discount} width={20} height={20} />
                <div className={styles.content}>
                  <Typography variant="body2" className={styles.name}>
                    {cou.name}
                  </Typography>
                  <Typography variant="body2" className={styles.date}>
                    HSD: {cou.expired}
                  </Typography>
                </div>
              </div>
              <Typography variant="body2" className={styles.description}>
                <BsDot />
                {cou.discounts[0].des}
              </Typography>
              {showDetail ? (
                <>
                  {cou.discounts.slice(1).map((it, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      className={styles.description}
                    >
                      <BsDot />
                      {it.des}
                      {/* Tối đa 50,000 <sup>₫</sup> */}
                    </Typography>
                  ))}
                </>
              ) : (
                ''
              )}
              <div className={styles.applyBox}>
                <Button
                  vairant="text"
                  className={styles.detail}
                  onClick={handleShowDetail}
                >
                  {!showDetail ? 'Xem chi tiết' : 'Thu gọn'}
                  {!showDetail ? (
                    <MdKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowUp />
                  )}
                </Button>
                <Button
                  variant="contained"
                  className={styles.accept}
                  onClick={() => handleChooseCoupon(cou)}
                >
                  Áp dụng
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ModalCheckouts;
