// import { Button, Grid, Modal, Typography } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import InforDeliver from './InforDeliver';
import ListOrder from './ListOrder';
// import ModalCheckouts from './Modal';
import { useCart } from 'react-use-cart';
import { Context } from '../../constants/Context';
// import Alerts from '../Alerts';
import Notify from './Notify';
import { useDispatch, useSelector } from 'react-redux';
import { checkouts } from '../../lib/services/customer';
import { checkoutsRequest } from '../../store/actions/customer';

// const coupons = [
//   {
//     name: 'KHANHBUI',
//     expired: '30/9/2022',
//     value: 5,
//     discounts: [
//       { des: 'Giảm 5% giá trị đơn hàng' },
//       { des: 'Tối đa 50,000 đ' },
//     ],
//   },
//   {
//     name: 'KHANHBU',
//     expired: '30/12/2022',
//     value: 25,
//     discounts: [
//       { des: 'Giảm 25% giá trị đơn hàng' },
//       { des: 'Tối đa 250,000 đ' },
//     ],
//   },
//   {
//     name: 'KHANH',
//     expired: '30/12/2022',
//     value: 25,
//     discounts: [
//       { des: 'Giảm 25% giá trị đơn hàng' },
//       { des: 'Tối đa 250,000 đ' },
//     ],
//   },
// ];

const CheckoutDetail = ({ userData, address }) => {
  // const [showDetail, setShow] = React.useState(false);
  // const [coupon, setCoupon] = React.useState([]);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const { pointUsed, router } = React.useContext(Context);
  // const [isPopup, setPopup] = React.useState(false);
  const [isNotify, setNotify] = React.useState(false);

  const [allInforDeliver, setAllInforDeliver] = React.useState({
    ...address,
    payment: 'cash',
  });
  const [totalFeeAmount, setTotalFeeAmount] = React.useState(0);
  const [cartsPrice, setTotal] = React.useState(0);
  // const [openSnackbar, setOpenSnackbar] = React.useState({
  //   open: false,
  //   severity: 'success',
  //   message: 'Bạn đã đặt hàng thành công!!',
  // });

  const { items, setItems } = useCart();

  const cartCheck = React.useMemo(() => {
    return items.filter((it) => it.isCheck);
  }, [items]);

  React.useEffect(() => {
    if (cartCheck?.length > 0) {
      const total = cartCheck.reduce((prev, curr) => {
        return prev + Number(curr.price) * curr.quantity;
      }, 0);
      const totalFee = cartCheck.reduce((prev, curr) => {
        return prev + Number(curr.feeAmount);
      }, 0);
      setTotal(total);
      setTotalFeeAmount(totalFee);
    }
  }, [cartCheck]);

  /* 1 REWARD POINT EQUALS 1000 VND  */

  const discountPercent = process.env.NEXT_PUBLIC_DISCOUNT_PERCENT || 30;
  const rewardPoints = allInforDeliver.rewardPoint - pointUsed;
  const discount = pointUsed * 1000;
  const feeShip = 25000;
  const totalPrice = cartsPrice - discount + feeShip + totalFeeAmount;
  const maxPoints = Math.floor((cartsPrice * (discountPercent / 100)) / 1000);
  const maxRewardPoints =
    maxPoints > allInforDeliver.rewardPoint
      ? allInforDeliver.rewardPoint
      : maxPoints;

  const objBill = React.useMemo(() => {
    return {
      pointUsed,
      rewardPoints,
      discount,
      feeShip,
      totalPrice,
      maxRewardPoints,
      cartsPrice,
      totalFeeAmount,
    };
  }, [pointUsed, maxPoints]);

  const newAllInforDeliver = React.useMemo(() => {
    return { ...allInforDeliver, ...objBill, products: cartCheck };
  }, [objBill, allInforDeliver]);

  const handleChangeInforDeliver = (key, value) => {
    setAllInforDeliver((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const spliceString = (string, first, second) => {
    const mapObj = {
      [`${first}`]: '',
      [`${second}`]: '',
    };
    const reg = new RegExp(Object.keys(mapObj).join('|'), 'gi');
    string = string.replace(reg, function (matched) {
      return mapObj[matched];
    });
    return string;
  };
  const handleFinish = () => {
    const newItems = items.filter((it) => !it.isCheck);
    // setItems(newItems);
    // setAllInforDeliver(newAllInforDeliver);
    const checkoutsForm = {
      customerId: userData.id,
      description: 'Ghi chú đơn hàng',
      products: cartCheck.map((pro) => ({
        id: pro.id,
        color: pro.color,
        size: pro.size,
        quantity: pro.quantity,
      })),
      deliveryAddressId: userData.addressId,
    };

    dispatch(checkoutsRequest(checkoutsForm));
    // setNotify(!isNotify);
    // router.push('/cart');
    // const time = setTimeout(() => {
    // }, 10000);
    // return () => clearTimeout(time);
  };
  // console.log(allInforDeliver);

  // const handleShowPopup = React.useCallback(() => {
  //   setPopup(!isPopup);
  // }, [isPopup]);

  // const handleLogin = React.useCallback(() => {
  //   setLogin(!login);
  // }, [login]);

  // const handleShowDetail = React.useCallback(() => {
  //   setShow(!showDetail);
  // }, [showDetail]);

  // const handleChooseCoupon = React.useCallback(
  //   (item) => {
  //     const check = coupon.find((it) => it.name === item.name) ? true : false;
  //     if (check) return;
  //     setCoupon((prev) => [...prev, item]);
  //   },
  //   [coupon.length]
  // );

  // const handleRemoveCoupon = React.useCallback((item) => {
  //   setCoupon((prev) => prev.filter((it) => it.name !== item.name));
  // }, []);
  // console.log(allInforDeliver);
  return (
    <>
      {/* <ModalCheckouts
        isPopup={isPopup}
        handleShowPopup={handleShowPopup}
        handleShowDetail={handleShowDetail}
        handleChooseCoupon={handleChooseCoupon}
        coupons={coupons}
        showDetail={showDetail}
      /> */}
      <Notify isNotify={isNotify} />
      <div className={styles.root}>
        {/* <Alerts state={openSnackbar} setState={setOpenSnackbar} /> */}

        <div className={styles.container}>
          <div className={styles.left}>
            <InforDeliver
              // token={null}
              // login={login}
              // handleLogin={handleLogin}
              handleFinish={handleFinish}
              allInforDeliver={allInforDeliver}
              setAllInforDeliver={setAllInforDeliver}
              handleChangeInforDeliver={handleChangeInforDeliver}
            />
          </div>
          <div className={styles.right}>
            <ListOrder
              objBill={objBill}
              cartCheck={cartCheck}
              handleFinish={handleFinish}
              allInforDeliver={allInforDeliver}
              setAllInforDeliver={setAllInforDeliver}
              // handleShowPopup={handleShowPopup}
              // login={login}
              // coupon={coupon}
              // dataCoupon={coupons}
              // handleLogin={handleLogin}
              // handleRemoveCoupon={handleRemoveCoupon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutDetail;
