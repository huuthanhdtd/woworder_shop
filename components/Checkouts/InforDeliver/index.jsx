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

const InforDeliver = ({ token, handleLogin, login }) => {
  const [state, setState] = React.useState({
    city: '',
    district: '',
    wards: '',
    addresses: '',
  });

  const [addressUser, setAddressUser] = React.useState();

  const [data, setData] = React.useState({
    cities: citieslist[0].cities,
    districts: null,
    wards: null,
  });
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

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (value === '' && name === 'city') {
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
      return;
    }
    setState({
      ...state,
      [name]: event.target.value,
    });
    if (name === 'city') {
      setData({
        ...data,
        districts: data.cities.find((it) => it.name === event.target.value),
      });
    }
    if (name === 'district' && data.districts) {
      setData({
        ...data,
        wards: data.districts.districts.find(
          (it) => it.name === event.target.value
        ),
      });
    }
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
              Trần Quang Huy (quanghuy.tipici@gmail.com)
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
        />
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <TextField
              className={styles.input}
              variant="outlined"
              placeholder="Email"
            />
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <TextField
              className={styles.input}
              variant="outlined"
              placeholder="Số điện thoại"
            />
          </Grid>
        </Grid>
        <Addresses
          data={data}
          state={state}
          deliver={deliver}
          handleChange={handleChange}
          handleDeliver={handleDeliver}
        />
        <Delivery deliver={deliver} data={data} />
        <Typography className={styles.caption}>
          Phương thức thanh toán
        </Typography>
        <Payments handlePayment={handlePayment} payment={payment} />
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
