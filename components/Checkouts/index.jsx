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

const CheckoutDetail = ({ userData, addresses }) => {
  // const [showDetail, setShow] = React.useState(false);
  // const [coupon, setCoupon] = React.useState([]);
  const dispatch = useDispatch();
  const { isCheckouts, checkoutsMess, isAlert } = useSelector(
    (state) => state.app
  );

  const { pointUsed, router } = React.useContext(Context);
  // const [isPopup, setPopup] = React.useState(false);

  const [allInforDeliver, setAllInforDeliver] = React.useState({
    payment: 'cash',
    ...addresses[0],
    id: userData.id,
    addressId: addresses[0].id,
  });
  const { items, setItems, metadata } = useCart();

  const cartCheck = React.useMemo(() => {
    return items.filter((it) => it.isCheck);
  }, [items]);

  const total = cartCheck.reduce((prev, curr) => {
    return prev + Number(curr.price) * curr.quantity;
  }, 0);

  // const totalFee = cartCheck.reduce((prev, curr) => {
  //   return prev + Number(curr.feeAmount);
  // }, 0);

  /* 1 REWARD POINT EQUALS 1000 VND  */

  const discountPercent = process.env.NEXT_PUBLIC_DISCOUNT_PERCENT || 30;
  // const rewardPoints = allInforDeliver.rewardPoint || 0 - pointUsed;
  // const discount = pointUsed * 1000;
  // const feeShip = 25000;
  // const totalPrice = total - discount + feeShip + totalFee;
  const totalPrice = total;
  const maxPoints = Math.floor((total * (discountPercent / 100)) / 1000);
  // const maxRewardPoints =
  //   maxPoints > allInforDeliver.rewardPoint
  //     ? allInforDeliver.rewardPoint
  //     : maxPoints;

  const objBill = React.useMemo(() => {
    return {
      // pointUsed,
      // rewardPoints,
      // discount,
      // feeShip,
      // maxRewardPoints,
      // totalFee,
      total,
      totalPrice,
    };
  }, [pointUsed, maxPoints]);

  // const newAllInforDeliver = React.useMemo(() => {
  //   return { ...allInforDeliver, ...objBill, products: cartCheck };
  // }, [objBill, allInforDeliver]);

  const handleChangeInforDeliver = (key, value) => {
    setAllInforDeliver((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const handleFinish = () => {
    const checkoutsForm = {
      customerId: userData.id,
      description: metadata.notes || 'Ghi chú đơn hàng',
      products: cartCheck.map((pro) => ({
        id: pro.productId,
        color: pro.color,
        size: pro.size,
        quantity: pro.quantity,
      })),
      deliveryAddressId: allInforDeliver.addressId,
    };

    dispatch(checkoutsRequest(checkoutsForm));
  };

  React.useEffect(() => {
    const newItems = items.filter((it) => !it.isCheck);

    if (isCheckouts) {
      const time = setTimeout(() => {
        setItems(newItems);
      }, 5000);
      return () => clearTimeout(time);
    }
  }, [isCheckouts]);

  // const handleShowPopup = React.useCallback(() => {
  //   setPopup(!isPopup);
  // }, [isPopup]);

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
      <Notify isNotify={isAlert} checkoutsMess={checkoutsMess} />
      <div className={styles.root}>
        {/* <Alerts state={openSnackbar} setState={setOpenSnackbar} /> */}

        <div className={styles.container}>
          <div className={styles.left}>
            <InforDeliver
              addresses={addresses}
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
              // coupon={coupon}
              // dataCoupon={coupons}
              // handleRemoveCoupon={handleRemoveCoupon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutDetail;
