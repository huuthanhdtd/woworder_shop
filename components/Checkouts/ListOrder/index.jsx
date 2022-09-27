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
import Crown from '../../../assets/image/crown.svg';
import clsx from 'clsx';
import { convertCurrency } from '../../../utils/convertCurrency';
import { useWindowSize } from 'react-use';

const ListOrder = ({
  handleShowPopup,
  coupon,
  dataCoupon,
  handleRemoveCoupon,
  handleLogin,
  login,
}) => {
  const [open, setOpen] = React.useState(false);

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

  const provisionalPrice = 195000;
  const discount = 45000;
  const feeShip = 25000;
  const totalPrice = provisionalPrice - discount + feeShip;

  const [value, setValue] = React.useState(30);

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
            25.000 <sup>đ</sup>
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

            {/* <div className={styles.codeDiscount}>
          <Grid container spacing={1} justifyContent="space-between">
            <Grid item lg={9}>
              <TextField
                variant="outlined"
                className={styles.input}
                label="Mã giảm giá"
              />
            </Grid>
            <Grid item lg={3}>
              <Button variant="outlined" className={styles.useCodeBtn}>
                Sử dụng
              </Button>
            </Grid>
          </Grid>
          <div className={styles.showPopup} onClick={handleShowPopup}>
            <Typography className={styles.titleCoupon}>
              <RiCoupon2Line size={12} className={styles.icon} />
              Xem thêm mã giảm giá
            </Typography>
            <div className={styles.wrapCoupon}>
              {dataCoupon.map((cou, idx) => (
                <div key={idx} className={styles.coupon}>
                  <Typography variant="body2" className={styles.textCoupon}>
                    Giảm {cou.value}%
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div> */}
            {/* <div className={styles.line} /> */}
            <div className={styles.client}>
              <div className={styles.wrapCaption}>
                <Typography variant="body1" className={styles.caption}>
                  Khách hàng thân thiết
                </Typography>
                {login && (
                  <Typography variant="body2" className={styles.description}>
                    (Không thể sử dụng chung với các khuyến mãi khác.)
                  </Typography>
                )}
              </div>
              {!login && (
                <Button
                  variant="outlined"
                  className={styles.login}
                  onClick={handleLogin}
                >
                  Đăng nhập
                </Button>
              )}
            </div>
            {login && (
              <div className={styles.discountUser}>
                <Typography variant="body2" className={styles.inforDiscount}>
                  <Image
                    src={Crown}
                    width={20}
                    height={20}
                    className={styles.crown}
                  />{' '}
                  Đồng
                  <BsDot /> 0 điểm thưởng
                </Typography>
              </div>
            )}

            <div className={styles.line} />
            <div className={styles.bill}>
              <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="point-slider"
                valueLabelDisplay="on"
                defaultValue={30}
                min={0}
                max={110}
                className={styles.rangeSlider}
              />
              <div className={clsx(styles.prevPrice, styles.borderFlex)}>
                <Typography variant="body2">Tạm tính</Typography>
                <Typography variant="body2">
                  {convertCurrency(provisionalPrice)}
                </Typography>
              </div>
              <div className={clsx(styles.prevPrice, styles.borderFlex)}>
                <Typography variant="body2">Giảm giá điểm thưởng</Typography>
                <Typography variant="body2">
                  -{convertCurrency(discount)}
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

            <Typography variant="body2">
              -{convertCurrency(discount)}
            </Typography>
          </div> */}
              <div className={clsx(styles.prevPrice, styles.borderFlex)}>
                <Typography variant="body2">Phí vận chuyển </Typography>

                <Typography variant="body2">
                  {convertCurrency(feeShip)}
                </Typography>
              </div>
            </div>
            <div className={styles.line} />
            <div className={styles.total}>
              <Typography className={styles.subtitle}>Tổng cộng</Typography>
              <Typography className={styles.totalPrice}>
                <span>vnd</span>
                {convertCurrency(totalPrice)}
              </Typography>
            </div>
            <div className={styles.boxSubmit}>
              <Button variant="text" className={styles.gotoCarts}>
                Giỏ hàng
              </Button>
              <Button variant="contained" className={styles.submit}>
                Hoàn tất đơn hàng
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ListOrder;
