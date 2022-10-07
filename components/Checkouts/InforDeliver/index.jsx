import { Button, Grid, Link, TextField, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { citieslist } from '../../../constants/selectListData';
import styles from './styles.module.scss';
import SelectForm from './SelectForm';
import Payments from './Payment';
import Delivery from './Deliver';
import Addresses from './Addresses';

const addresses = [
  { name: 'Hòa khương, đà nẵng' },
  { name: 'Quận 10, Hồ Chí Minh' },
];

const InforDeliver = ({
  token,
  handleLogin,
  login,
  handleChangeInforDeliver,
  setAllInforDeliver,
}) => {
  const userData = React.useMemo(() => {
    if (localStorage.getItem('USER_INFOR')) {
      return JSON.parse(localStorage.getItem('USER_INFOR'));
    }
  }, []);

  /* set First data  */
  const firstState = React.useMemo(() => {
    const cities =
      userData && citieslist[0].cities.find((it) => it.code === userData.city);
    const districts =
      userData &&
      cities &&
      cities.districts.find((it) => it.name === userData.districts);
    const wards =
      districts &&
      userData &&
      districts.wards.find((it) => it.name === userData.wards);
    return {
      cities,
      districts,
      wards,
    };
  }, [userData]);
  const [data, setData] = React.useState({
    cities: citieslist[0].cities,
    districts: firstState?.cities ? firstState?.cities : null,
    wards: firstState?.districts ? firstState?.districts : null,
  });

  const [state, setState] = React.useState({
    city: firstState ? firstState.cities.name : '',
    district: firstState ? firstState.districts.name : '',
    wards: firstState ? firstState.wards.name : '',
    addresses: '',
  });

  /* */

  const [useFormValues, setUserFormValues] = React.useState({
    name: userData ? `${userData?.lastname} ${userData.firstname}` : '',
    email: userData?.email ? userData?.email : '',
    phone: userData?.phone ? userData?.phone : '',
  });

  const [addressUser, setAddressUser] = React.useState();

  const [deliver, setDeliver] = React.useState('deliver');
  const [payment, setPayment] = React.useState('cash');

  const handlePayment = React.useCallback((type) => {
    setPayment(type);
  }, []);

  const handleDeliver = React.useCallback((type) => {
    setDeliver(type);
    setData({
      cities: citieslist[0].cities,
      districts: null,
      wards: null,
    });
    setState({
      city: '',
      district: '',
      wards: '',
    });
  }, []);

  const handleUpdateAddress = React.useCallback((event) => {
    setAddressUser(event.target.value);
  }, []);

  /* hanl onChang User form value */

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
          cities: citieslist[0].cities,
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

  const router = useRouter();

  return (
    <div className={styles.infor}>
      <Typography className={styles.title}>Khanh Bui</Typography>
      <div className={styles.tabMenu}>
        <Link href="/">Trang chủ</Link>
        <RiArrowRightSLine className={styles.iconArrow} />
        <Typography variant="body2">Thông tin giao hàng</Typography>
      </div>
      <Typography className={styles.caption}>Thông tin giao hàng</Typography>
      {!login ? (
        <Typography className={styles.questionLogin}>
          Bạn đã có tài khoản?
          {/* <Link href="/account/login"> Đăng nhập</Link> */}
          <Link href="#" onClick={handleLogin}>
            {' '}
            Đăng nhập
          </Link>
        </Typography>
      ) : (
        <div className={styles.user}>
          <div className={styles.iconUser}>
            <AiOutlineUser />
          </div>
          <div className={styles.userInfor}>
            <Typography variant="body2">
              {`${userData?.lastname} ${userData.firstname}`}
            </Typography>
            <Button
              variant="text"
              className={styles.logout}
              onClick={handleLogin}
            >
              Đăng xuất
            </Button>
          </div>
        </div>
      )}

      <form action="" className={styles.form}>
        {login && (
          <SelectForm
            label={'Thêm địa chỉ mới...'}
            title={'Địa chỉ đã lưu trữ'}
            name="addresses"
            data={addresses}
            state={state}
            handleChange={handleUpdateAddress}
          />
        )}

        <TextField
          className={styles.input}
          variant="outlined"
          placeholder="Họ và tên"
          onChange={(e) => handleOnChangeFormUser(e.target.value, 'name')}
          // defaultValue={
          //   login ? `${userData?.lastname} ${userData.firstname}` : ''
          // }
          value={useFormValues?.name}
        />
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <TextField
              className={styles.input}
              variant="outlined"
              placeholder="Email"
              onChange={(e) => handleOnChangeFormUser(e.target.value, 'email')}
              // defaultValue={login ? `${userData?.email}` : ''}
              value={useFormValues?.email}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <TextField
              className={styles.input}
              variant="outlined"
              placeholder="Số điện thoại"
              onChange={(e) => handleOnChangeFormUser(e.target.value, 'phone')}
              // defaultValue={login ? `${userData?.phone}` : ''}
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
          handleChangeInforDeliver={handleChangeInforDeliver}
        />
        <Delivery deliver={deliver} data={data} />
        <Typography className={styles.caption}>
          Phương thức thanh toán
        </Typography>
        <Payments
          handlePayment={handlePayment}
          payment={payment}
          setAllInforDeliver={setAllInforDeliver}
        />
        <div className={styles.boxSubmit}>
          <Button variant="text" className={styles.gotoCarts}>
            Giỏ hàng
          </Button>
          <Button variant="contained" className={styles.submit}>
            Hoàn tất đơn hàng
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InforDeliver;
