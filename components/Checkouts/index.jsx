import { Button, Grid, Modal, Typography } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import InforDeliver from './InforDeliver';
import ListOrder from './ListOrder';
import clsx from 'clsx';
import discount from '../../assets/image/discount.svg';
import Image from 'next/image';
import { BsDot } from 'react-icons/bs';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdClose,
} from 'react-icons/md';

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
      <div className={styles.root}>
        <Grid
          container
          justifyContent="space-evenly"
          className={styles.container}
        >
          <Grid item lg={6} md={5} sm={10} xs={11} className={styles.left}>
            <InforDeliver
              token={null}
              handleLogin={handleLogin}
              login={login}
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
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CheckoutDetail;
