import { Button, Grid, Slider, TextField, Typography } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import { FiShoppingCart } from 'react-icons/fi';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdOutlineClose,
} from 'react-icons/md';
import { RiCoupon2Line } from 'react-icons/ri';
import Product from '../../../assets/image/product.png';
import Image from 'next/image';
import { AiFillTag, AiFillCloseCircle } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';

import Coupon from '../../../assets/image/coupon.svg';
import clsx from 'clsx';
import { convertCurrency } from '../../../utils/convertCurrency';
import { useWindowSize } from 'react-use';
import Bill from './Bill';
import RewardPoints from './RewardPoints';

const ListOrder = ({
  handleShowPopup,
  coupon,
  dataCoupon,
  handleRemoveCoupon,
  handleLogin,
  login,
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const { width } = useWindowSize();
  React.useEffect(() => {
    if (width > 959) {
      setOpen(true);
    }
    return () => setOpen(false);
  }, [width]);

  const handleShowOrder = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  /* 1 REWARD POINT EQUALS 1000 VND  */

  const discountPercent = process.env.NEXT_PUBLIC_DISCOUNT_PERCENT;
  const rewardPoints = 250 - value;
  const provisionalPrice = 195000;
  const discount = value * 1000;
  const feeShip = 25000;
  const totalPrice = provisionalPrice - discount + feeShip;
  const maxRewardPoints = Math.floor(
    (provisionalPrice * (discountPercent / 100)) / 1000
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.background} />
      <div className={styles.listOrder}>
        <Button
          variant="text"
          className={styles.btnShowOrder}
          onClick={handleShowOrder}
        >
          <div className={styles.textBtn}>
            <FiShoppingCart className={styles.icon} />
            {open ? (
              <span>
                Ẩn thông tin đơn hàng
                <MdOutlineKeyboardArrowUp />
              </span>
            ) : (
              <span>
                Hiển thị thông tin đơn hàng
                <MdOutlineKeyboardArrowDown />
              </span>
            )}
          </div>
          <Typography variant="body2" className={styles.price}>
            {convertCurrency(provisionalPrice)}
          </Typography>
        </Button>
        {open && (
          <>
            {Array.from({ length: 3 }).map((it, idx) => (
              <div className={styles.product} key={idx}>
                <div className={styles.wrap}>
                  <div className={styles.borderImg}>
                    <Image src={Product} width={52} height={50} />
                  </div>
                  <Typography variant="body2">
                    Băng vệ sinh hữu cơ Nateen Bỉ, 10 miếng
                  </Typography>
                </div>
                <Typography variant="body2" className={styles.price}>
                  25.000 <sup>đ</sup>
                </Typography>
              </div>
            ))}
            <div className={styles.line} />
            <RewardPoints
              login={login}
              handleLogin={handleLogin}
              dataCoupon={dataCoupon}
              handleShowPopup={handleShowPopup}
              rewardPoints={rewardPoints}
            />

            <div className={styles.line} />
            <Bill
              login={login}
              value={value}
              handleChange={handleChange}
              provisionalPrice={provisionalPrice}
              discount={discount}
              feeShip={feeShip}
              totalPrice={totalPrice}
              coupon={coupon}
              handleRemoveCoupon={handleRemoveCoupon}
              maxRewardPoints={maxRewardPoints}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ListOrder;
