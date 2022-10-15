import { Button, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import { FiShoppingCart } from 'react-icons/fi';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { convertCurrency } from '../../../utils/convertCurrency';
import Bill from './Bill';
import RewardPoints from './RewardPoints';
import { Context } from '../../../constants/Context';

const ListOrder = ({
  // login,
  objBill,
  cartCheck,
  // handleLogin,
  handleFinish,
  allInforDeliver,
  handleShowPopup,
  setAllInforDeliver,
  // coupon,
  // dataCoupon,
  // handleRemoveCoupon,
}) => {
  const { setPointUsed, width } = React.useContext(Context);
  const [open, setOpen] = React.useState(false);
  const [isChecked, setCheck] = React.useState(false);

  React.useEffect(() => {
    if (width > 960) {
      setOpen(true);
    }
    return () => setOpen(false);
  }, [width]);

  const handleShowOrder = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleChecked = React.useCallback(() => {
    setCheck(!isChecked);
    setPointUsed(0);
  }, [isChecked]);

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
            {convertCurrency(objBill.cartsPrice)}
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
                  </div>
                  <Typography variant="body2">{`${it.name} ${
                    it.color ? `${it.color}` : ''
                  } ${it.size ? `${it.size}` : ''}`}</Typography>
                </div>
                <Typography variant="body2" className={styles.price}>
                  {`${convertCurrency(it.price)} x ${it.quantity}`}
                </Typography>
              </div>
            ))}
            <div className={styles.line} />
            <RewardPoints
              // login={login}
              checked={isChecked}
              // handleLogin={handleLogin}
              handleChecked={handleChecked}
              handleShowPopup={handleShowPopup}
              rewardPoints={objBill.rewardPoints}
              // dataCoupon={dataCoupon}
            />

            <div className={styles.line} />
            <Bill
              // login={login}
              objBill={objBill}
              checked={isChecked}
              cartCheck={cartCheck}
              handleFinish={handleFinish}
              allInforDeliver={allInforDeliver}
              provisionalPrice={objBill.cartsPrice}
              setAllInforDeliver={setAllInforDeliver}
              // coupon={coupon}
              // handleChange={handleChange}
              // handleRemoveCoupon={handleRemoveCoupon}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ListOrder;
