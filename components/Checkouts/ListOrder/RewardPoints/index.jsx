import { Button, Checkbox, Grid, TextField, Typography } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import { BsDot } from 'react-icons/bs';
import styles from './styles.module.scss';
import Crown from '../../../../assets/image/crown.svg';
import { RiCoupon2Line } from 'react-icons/ri';

const RewardPoints = ({
  login,
  handleLogin,
  dataCoupon,
  handleShowPopup,
  rewardPoints,
  checked, handleChecked
}) => {
  
  return (
    <div className={styles.wrapper}>
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
        <div className={styles.wrapDiscountUser}>

        <div className={styles.discountUser}>
          <Typography variant="body2" className={styles.inforDiscount}>
            <Image
              src={Crown}
              width={20}
              height={20}
              className={styles.crown}
              />{' '}
            Điểm
            <BsDot /> {rewardPoints} điểm thưởng
          </Typography>
        </div>
        <Checkbox
        checked={checked}
        onChange={handleChecked}
        size="small"
        style={{color: '#108775'}}
        // inputProps={{ 'aria-label': 'checkbox with small size' }}
      />
              </div>
      )}
    </div>
  );
};

export default RewardPoints;
