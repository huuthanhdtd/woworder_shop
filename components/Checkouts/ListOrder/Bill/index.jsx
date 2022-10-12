import { Button, Slider, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { AiFillCloseCircle, AiFillTag } from 'react-icons/ai';
import { convertCurrency } from '../../../../utils/convertCurrency';
import { useCart } from 'react-use-cart';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Alerts from '../../../Alerts';

const Bill = ({
  handleChange,
  provisionalPrice,
  coupon,
  handleRemoveCoupon,
  login,
  checked,
  setAllInforDeliver,
  allInforDeliver,
  objBill,
  cartCheck,
}) => {
  const router = useRouter();
  const { setItems, items } = useCart();
  const [openSnackbar, setOpenSnackbar] = React.useState({
    open: false,
    severity: 'success',
    message: 'Bạn đã đặt hàng thành công!!',
  });
  const newAllInforDeliver = React.useMemo(() => {
    return { ...allInforDeliver, ...objBill, products: cartCheck };
  }, [objBill, allInforDeliver]);
  const handleFinish = () => {
    setOpenSnackbar({
      open: true,
      severity: 'success',
      message: 'Bạn đã đặt hàng thành công!! 3331132154',
    });
    const newItems = items.filter((it) => !it.isCheck);
    setItems(newItems);
    setAllInforDeliver(newAllInforDeliver);
    const time = setTimeout(() => {
      router.push('/cart');
    }, 3000);
    return () => clearTimeout(time);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.bill}>
        {login && (
          <Slider
            disabled={!checked}
            value={objBill.value}
            onChange={handleChange}
            aria-labelledby="point-slider"
            valueLabelDisplay="on"
            min={0}
            max={objBill.maxRewardPoints}
            className={styles.rangeSlider}
          />
        )}
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
      <Alerts state={openSnackbar} setState={setOpenSnackbar} />
    </div>
  );
};

export default Bill;
