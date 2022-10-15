import { Button, Slider, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { convertCurrency } from '../../../../utils/convertCurrency';
import styles from './styles.module.scss';
import { Context } from '../../../../constants/Context';

const Bill = ({
  // coupon,
  // handleRemoveCoupon,
  // login,
  objBill,
  checked,
  handleFinish,
  provisionalPrice,
}) => {
  const { setPointUsed } = React.useContext(Context);
  const handleChange = (event, newValue) => {
    setPointUsed(newValue);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bill}>
        {/* {login && ( */}
        <Slider
          disabled={!checked}
          value={objBill.pointUsed}
          onChange={handleChange}
          aria-labelledby="point-slider"
          valueLabelDisplay="on"
          max={objBill.maxRewardPoints}
          className={styles.rangeSlider}
        />
        {/* )} */}
        <div className={clsx(styles.prevPrice, styles.borderFlex)}>
          <Typography variant="body2">Tạm tính</Typography>
          <Typography variant="body2">
            {convertCurrency(provisionalPrice)}
          </Typography>
        </div>
        <div className={clsx(styles.prevPrice, styles.borderFlex)}>
          <Typography variant="body2">Giảm giá điểm thưởng</Typography>
          <Typography variant="body2">
            -{convertCurrency(objBill.discount)}
          </Typography>
        </div>
        {/* <div className={clsx(styles.discount, styles.borderFlex)}>
          <div className={styles.wrapBox}>
            <Typography variant="body2" className={styles.attr}>
              Mã giảm giá
            </Typography>
            <div className={styles.allCoupon}>
              {coupon.map((cou, idx) => (
                <div key={idx} className={styles.addCoupon}>
                  <AiFillTag />
                  <Typography variant="body2" className={styles.nameCoupon}>
                    {cou.name}
                  </Typography>
                  <AiFillCloseCircle
                    className={styles.closeTag}
                    onClick={() => handleRemoveCoupon(cou)}
                  />
                </div>
              ))}
            </div>
          </div>

          <Typography variant="body2">-{convertCurrency(discount)}</Typography>
        </div> */}
        <div className={clsx(styles.prevPrice, styles.borderFlex)}>
          <Typography variant="body2">Phí đặt hàng </Typography>

          <Typography variant="body2">
            {convertCurrency(objBill.totalFeeAmount)}
          </Typography>
        </div>
        <div className={clsx(styles.prevPrice, styles.borderFlex)}>
          <Typography variant="body2">Phí vận chuyển </Typography>

          <Typography variant="body2">
            {convertCurrency(objBill.feeShip)}
          </Typography>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.total}>
        <Typography className={styles.subtitle}>Tổng cộng</Typography>
        <Typography className={styles.totalPrice}>
          <span>vnd</span>
          {convertCurrency(objBill.totalPrice)}
        </Typography>
      </div>
      <div className={styles.boxSubmit}>
        <Button variant="text" className={styles.gotoCarts}>
          Giỏ hàng
        </Button>
        <Button
          variant="contained"
          className={styles.submit}
          onClick={handleFinish}
        >
          Hoàn tất đơn hàng
        </Button>
      </div>
    </div>
  );
};

export default Bill;
