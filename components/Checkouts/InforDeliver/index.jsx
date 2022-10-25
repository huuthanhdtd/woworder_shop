import { Button, Grid, Link, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import cityData from '../../../constants/local.json';
import styles from './styles.module.scss';
// import SelectForm from './SelectForm';
import Payments from './Payment';
import Delivery from './Deliver';
import Addresses from './Addresses';

const InforDeliver = ({
  // token,
  // handleLogin,
  // login,
  handleFinish,
  allInforDeliver,
  setAllInforDeliver,
  handleChangeInforDeliver,
}) => {
  /* set First data  */
  const firstState = React.useMemo(() => {
    const cities = allInforDeliver
      ? cityData.find((it) => it.code === allInforDeliver.province)
      : null;
    const districts = cities
      ? cities.districts.find((it) => it.name === allInforDeliver.district)
      : null;
    const wards = districts
      ? districts.wards.find((it) => it.name === allInforDeliver.ward)
      : null;
    return {
      cities,
      districts,
      wards,
    };
  }, [allInforDeliver]);

  /* List data location city, district, wards */
  const [data, setData] = React.useState({
    cities: cityData,
    districts: firstState?.cities ? firstState?.cities : null,
    wards: firstState?.districts ? firstState?.districts : null,
  });

  /*Value of location has been chosen */
  const [state, setState] = React.useState({
    city: firstState?.cities ? firstState.cities.name : '',
    district: firstState?.districts ? firstState.districts.name : '',
    wards: firstState?.wards ? firstState.wards.name : '',
    addresses: '',
  });

  /*Infor customer */
  const [useFormValues, setUserFormValues] = React.useState({
    name: allInforDeliver?.name ? `${allInforDeliver.name}` : '',
    email: allInforDeliver?.email ? allInforDeliver?.email : '',
    phone: allInforDeliver?.phone ? allInforDeliver?.phone : '',
  });

  const [deliver, setDeliver] = React.useState('deliver');
  const [payment, setPayment] = React.useState('cash');
  // const [addressUser, setAddressUser] = React.useState();

  const handlePayment = React.useCallback((type) => {
    setPayment(type);
  }, []);

  const handleDeliver = React.useCallback((type) => {
    setDeliver(type);
    setData({
      cities: cityData,
      districts: null,
      wards: null,
    });
    setState({
      city: '',
      district: '',
      wards: '',
      addresses: '',
    });
  }, []);

  // const handleUpdateAddress = React.useCallback((event) => {
  //   setAddressUser(event.target.value);
  // }, []);

  /* handle onChang User form value */

  const handleOnChangeFormUser = (value, type) => {
    if (value !== '') {
      handleChangeInforDeliver(type, value);
    }
    setUserFormValues((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (value !== '') {
    }
    if (value === '') {
      if (name === 'city') {
        setState({
          city: '',
          district: '',
          wards: '',
        });
        setData({
          cities: cityData,
          districts: null,
          wards: null,
        });
      }
    } else {
      if (name === 'city') {
        setAllInforDeliver((prev) => {
          return {
            ...prev,
            city: value,
            district: '',
            wards: '',
          };
        });

        setData({
          ...data,
          districts: data.cities.find((it) => it.name === event.target.value),
          wards: null,
        });
      } else if (name === 'district' && data.districts) {
        setData({
          ...data,
          wards: data.districts.districts.find(
            (it) => it.name === event.target.value
          ),
        });
        setAllInforDeliver((prev) => {
          return {
            ...prev,
            district: value,
            wards: '',
          };
        });
      } else if (name === 'wards') {
        setAllInforDeliver((prev) => {
          return {
            ...prev,
            wards: value,
          };
        });
      }
    }

    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={styles.infor}>
      <Typography variant="h6" className={styles.title}>
        Khanh Bui
      </Typography>
      <div className={styles.tabMenu}>
        <Link href="/">Trang chủ</Link>
        <RiArrowRightSLine className={styles.iconArrow} />
        <Typography variant="body2">Thông tin giao hàng</Typography>
      </div>
      <Typography variant="body2" className={styles.caption}>
        Thông tin giao hàng
      </Typography>
      {/* {!login ? (
        <Typography variant="body2" className={styles.questionLogin}>
          Bạn đã có tài khoản?
          <Link href="/account/login"> Đăng nhập</Link>
          <Link href="#" onClick={handleLogin}>
            {' '}
            Đăng nhập
          </Link>
        </Typography>
      ) : ( */}
      <div className={styles.user}>
        <div className={styles.iconUser}>
          <AiOutlineUser />
        </div>
        <div className={styles.userInfor}>
          <Typography variant="body2">{`${allInforDeliver?.name}`}</Typography>
          <Button
            variant="text"
            className={styles.logout}
            // onClick={handleLogin}
          >
            Đăng xuất
          </Button>
        </div>
      </div>
      {/* )} */}

      <form action="" className={styles.form}>
        {/* {login && (
          <SelectForm
            label={'Thêm địa chỉ mới...'}
            title={'Địa chỉ đã lưu trữ'}
            name="addresses"
            data={addresses}
            state={state}
            handleChange={handleUpdateAddress}
          />
        )} */}

        <TextField
          className={styles.input}
          variant="outlined"
          placeholder="Họ và tên"
          onChange={(e) => handleOnChangeFormUser(e.target.value, 'name')}
          value={useFormValues?.name}
        />
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <TextField
              className={styles.input}
              variant="outlined"
              placeholder="Email"
              onChange={(e) => handleOnChangeFormUser(e.target.value, 'email')}
              value={useFormValues?.email}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <TextField
              className={styles.input}
              variant="outlined"
              placeholder="Số điện thoại"
              onChange={(e) => handleOnChangeFormUser(e.target.value, 'phone')}
              value={useFormValues?.phone}
            />
          </Grid>
        </Grid>
        <Addresses
          data={data}
          state={state}
          deliver={deliver}
          handleChange={handleChange}
          handleDeliver={handleDeliver}
          allInforDeliver={allInforDeliver}
          handleChangeInforDeliver={handleChangeInforDeliver}
        />
        <Delivery deliver={deliver} data={data} />
        {/* <Typography variant="body2" className={styles.caption}>
          Phương thức thanh toán
        </Typography>
        <Payments
          handlePayment={handlePayment}
          payment={payment}
          setAllInforDeliver={setAllInforDeliver}
        /> */}
        <div className={styles.boxSubmit}>
          <Button href="/cart" className={styles.gotoCarts}>
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
      </form>
    </div>
  );
};

export default InforDeliver;
