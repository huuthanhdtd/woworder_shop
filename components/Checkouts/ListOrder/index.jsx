import {
  Button,
  CardMedia,
  Grid,
  Slider,
  TextField,
  Typography,
} from '@material-ui/core';
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
import { useCart } from 'react-use-cart';

const ListOrder = ({
  handleShowPopup,
  coupon,
  dataCoupon,
  handleRemoveCoupon,
  handleLogin,
  login,
  setAllInforDeliver,
  allInforDeliver,
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [isChecked, setCheck] = React.useState(false);
  const { cartTotal, items } = useCart();
  const [cartsPrice, setTotal] = React.useState(0);

  const { width } = useWindowSize();
  React.useEffect(() => {
    if (width > 959) {
      setOpen(true);
    }
    return () => setOpen(false);
  }, [width]);

  const cartCheck = React.useMemo(() => {
    return items.filter((it) => it.isCheck);
  }, [items]);
  React.useEffect(() => {
    if (cartCheck?.length > 0) {
      const total = cartCheck.reduce((prev, curr) => {
        return prev + Number(curr.price) * curr.quantity;
      }, 0);
      setTotal(total);
    }
  }, [cartCheck]);

  const handleShowOrder = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleChecked = React.useCallback(() => {
    setCheck(!isChecked);
    setValue(0);
  }, [isChecked]);

  /* 1 REWARD POINT EQUALS 1000 VND  */

  const discountPercent = process.env.NEXT_PUBLIC_DISCOUNT_PERCENT || 30;
  const rewardPoints = 250 - value;
  const discount = value * 1000;
  const feeShip = 25000;
  const totalPrice = cartsPrice - discount + feeShip;
  const maxRewardPoints = Math.floor(
    (cartsPrice * (discountPercent / 100)) / 1000
  );

  const objBill = React.useMemo(() => {
    return {
      value,
      rewardPoints,
      discount,
      feeShip,
      totalPrice,
      maxRewardPoints,
      cartsPrice,
    };
  }, [value]);

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
            {convertCurrency(cartsPrice)}
          </Typography>
        </Button>
        {open && (
          <>
            {cartCheck.map((it, idx) => (
              <div className={styles.product} key={idx}>
                <div className={styles.wrap}>
                  <div className={styles.borderImg}>
                    <CardMedia
                      image={it.imageUrl}
                      style={{ width: 52, height: 50 }}
                    />
                    {/* <Image src={Product} width={52} height={50} /> */}
                  </div>
                  <Typography variant="body2">{`${it.name} - ${it.color} - ${it.size}`}</Typography>
                </div>
                <Typography variant="body2" className={styles.price}>
                  {`${convertCurrency(it.price)} x ${it.quantity}`}
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
              handleChecked={handleChecked}
              checked={isChecked}
            />

            <div className={styles.line} />
            <Bill
              login={login}
              handleChange={handleChange}
              provisionalPrice={cartsPrice}
              coupon={coupon}
              handleRemoveCoupon={handleRemoveCoupon}
              checked={isChecked}
              setAllInforDeliver={setAllInforDeliver}
              allInforDeliver={allInforDeliver}
              objBill={objBill}
              cartCheck={cartCheck}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ListOrder;
