import { Button, Grid, Modal, Typography } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import InforDeliver from './InforDeliver';
import ListOrder from './ListOrder';
import clsx from 'clsx';
import Image from 'next/image';
import { BsDot } from 'react-icons/bs';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdClose,
} from 'react-icons/md';
import ModalCheckouts from './Modal';
import { getUserData } from '../../utils/localstorage';
import { useRouter } from 'next/router';

const coupons = [
  {
    name: 'KHANHBUI',
    expired: '30/9/2022',
    value: 5,
    discounts: [
      { des: 'Giảm 5% giá trị đơn hàng' },
      { des: 'Tối đa 50,000 đ' },
    ],
  },
  {
    name: 'KHANHBU',
    expired: '30/12/2022',
    value: 25,
    discounts: [
      { des: 'Giảm 25% giá trị đơn hàng' },
      { des: 'Tối đa 250,000 đ' },
    ],
  },
  {
    name: 'KHANH',
    expired: '30/12/2022',
    value: 25,
    discounts: [
      { des: 'Giảm 25% giá trị đơn hàng' },
      { des: 'Tối đa 250,000 đ' },
    ],
  },
];

const CheckoutDetail = () => {
  const [isPopup, setPopup] = React.useState(false);

  const [showDetail, setShow] = React.useState(false);

  const [coupon, setCoupon] = React.useState([]);

  const [login, setLogin] = React.useState(false);

  const userData = React.useMemo(() => {
    const getUserDataaa = getUserData('USER_INFOR');
    return getUserDataaa;
  }, []);

  const [allInforDeliver, setAllInforDeliver] = React.useState({
    ...userData,
    payment: 'cash',
  });

  const handleChangeInforDeliver = (key, value) => {
    setAllInforDeliver((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleShowPopup = React.useCallback(() => {
    setPopup(!isPopup);
  }, [isPopup]);

  const handleShowDetail = React.useCallback(() => {
    setShow(!showDetail);
  }, [showDetail]);

  const handleChooseCoupon = React.useCallback(
    (item) => {
      const check = coupon.find((it) => it.name === item.name) ? true : false;
      if (check) return;
      setCoupon((prev) => [...prev, item]);
    },
    [coupon.length]
  );

  const handleRemoveCoupon = React.useCallback((item) => {
    setCoupon((prev) => prev.filter((it) => it.name !== item.name));
  }, []);

  const handleLogin = React.useCallback(() => {
    setLogin(!login);
  }, [login]);

  return (
    <>
      <ModalCheckouts
        isPopup={isPopup}
        handleShowPopup={handleShowPopup}
        handleShowDetail={handleShowDetail}
        handleChooseCoupon={handleChooseCoupon}
        coupons={coupons}
        showDetail={showDetail}
      />
      <div className={styles.root}>
        <Grid
          container
          justifyContent="space-evenly"
          className={styles.container}
        >
          <Grid item lg={6} md={6} sm={10} xs={11} className={styles.left}>
            <InforDeliver
              token={null}
              handleLogin={handleLogin}
              login={login}
              handleChangeInforDeliver={handleChangeInforDeliver}
              setAllInforDeliver={setAllInforDeliver}
            />
          </Grid>
          <Grid item lg={5} md={5} sm={10} xs={11} className={styles.right}>
            <ListOrder
              handleShowPopup={handleShowPopup}
              coupon={coupon}
              dataCoupon={coupons}
              handleRemoveCoupon={handleRemoveCoupon}
              handleLogin={handleLogin}
              login={login}
              setAllInforDeliver={setAllInforDeliver}
              allInforDeliver={allInforDeliver}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CheckoutDetail;
