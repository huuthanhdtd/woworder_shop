import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import cityData from '../../../constants/local.json';
import styles from './styles.module.scss';
import SelectForm from './SelectForm';
// import Payments from './Payment';
import Delivery from './Deliver';
import Addresses from './Addresses';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../store/actions/auth';

const InforDeliver = ({
  addresses,
  handleFinish,
  allInforDeliver,
  setAllInforDeliver,
  handleChangeInforDeliver,
}) => {
  const dispatch = useDispatch();
  /* set First data  */
  const firstState = React.useMemo(() => {
    const districts = allInforDeliver.province
      ? cityData.find((it) => it.name === allInforDeliver.province)
      : null;
    const wards = districts
      ? districts.districts.find((it) => it.name === allInforDeliver.district)
      : null;
    return {
      districts,
      wards,
    };
  }, [allInforDeliver]);

  /* List data location city, district, wards */
  const [data, setData] = React.useState({
    cities: cityData,
    districts: firstState?.districts ? firstState?.districts.districts : null,
    wards: firstState?.wards ? firstState?.wards.wards : null,
  });

  /*Value of location has been chosen */
  const [state, setState] = React.useState({
    city:
      addresses[0].province === '' || addresses[0].province === '-'
        ? ''
        : addresses[0].province,
    district:
      addresses[0].province === '' || addresses[0].province === '-'
        ? ''
        : addresses[0].district,
    ward:
      addresses[0].ward === '' || addresses[0].ward === '-'
        ? ''
        : addresses[0].ward,
    address: addresses[0].address,
  });

  const [addressIdx, setAddressIdx] = React.useState(0);

  /*Infor customer */

  const [deliver, setDeliver] = React.useState('deliver');
  // const [payment, setPayment] = React.useState('cash');

  // const handlePayment = React.useCallback((type) => {
  //   setPayment(type);
  // }, []);

  // const handleDeliver = React.useCallback((type) => {
  //   setDeliver(type);
  //   setData({
  //     cities: cityData,
  //     districts: null,
  //     wards: null,
  //   });
  //   setState({
  //     city: '',
  //     district: '',
  //     wards: '',
  //     address: '',
  //   });
  // }, []);

  /* Handle onChange address value */
  const handleOnChangeAddress = (event) => {
    const { name, value } = event.target;
    if (value !== '') {
      setAddressIdx(value);
      setState({
        city:
          addresses[value].province === '' || addresses[value].province === '-'
            ? ''
            : addresses[value].province,
        district:
          addresses[value].district === '' || addresses[value].district === '-'
            ? ''
            : addresses[value].district,
        ward:
          addresses[value].ward === '' || addresses[value].ward === '-'
            ? ''
            : addresses[value].ward,
        address: addresses[value].address,
      });
      if (addresses[value].province !== '-' || '') {
        const districts = cityData.find(
          (it) => it.name === addresses[value].province
        );
        const wards =
          districts &&
          districts.districts &&
          districts.districts.find(
            (it) => it.name === addresses[value].district
          );
        setData({
          cities: cityData,
          districts: districts ? districts : null,
          wards: wards ? wards : null,
        });
      }
      setAllInforDeliver((prev) => {
        return {
          ...prev,
          addressId: addresses[value].id,
          province: addresses[value].province,
          district: addresses[value].district,
          ward: addresses[value].ward,
          address: addresses[value].address,
        };
      });
    }
  };
  const handleChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    // if (value === '') {
    //   if (name === 'city') {
    //     setState({
    //       city: '',
    //       district: '',
    //       wards: '',
    //       address: '',
    //     });
    //     setData({
    //       cities: cityData,
    //       districts: null,
    //       wards: null,
    //     });
    //   }
    // } else {
    //   if (name === 'city') {
    //     setAllInforDeliver((prev) => {
    //       return {
    //         ...prev,
    //         city: value,
    //         district: '',
    //         wards: '',
    //       };
    //     });
    //     setData({
    //       ...data,
    //       districts: data.cities.find((it) => it.name === event.target.value),
    //       wards: null,
    //     });
    //   } else if (name === 'district' && data.districts) {
    //     setData({
    //       ...data,
    //       wards: data.districts.districts.find(
    //         (it) => it.name === event.target.value
    //       ),
    //     });
    //     setAllInforDeliver((prev) => {
    //       return {
    //         ...prev,
    //         district: value,
    //         wards: '',
    //       };
    //     });
    //   } else if (name === 'wards') {
    //     setAllInforDeliver((prev) => {
    //       return {
    //         ...prev,
    //         wards: value,
    //       };
    //     });
    //   }
    //   setState({
    //     ...state,
    //     [name]: value,
    //   });
    // }
  };

  const handleLogOut = () => {
    dispatch(logOut());
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

      <div className={styles.user}>
        <div className={styles.iconUser}>
          <AiOutlineUser />
        </div>
        <div className={styles.userInfor}>
          <Typography variant="body2">{`${allInforDeliver?.name}`}</Typography>
          <Button
            variant="text"
            className={styles.logout}
            onClick={handleLogOut}
          >
            Đăng xuất
          </Button>
        </div>
      </div>

      <form action="" className={styles.form}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="address" className={styles.label}>
            Địa chỉ lưu trữ
          </InputLabel>
          <Select
            value={addressIdx}
            onChange={handleOnChangeAddress}
            label={'Địa chỉ lưu trữ'}
            inputProps={{
              id: 'address',
            }}
          >
            {addresses &&
              addresses.map((it, idx) => (
                <MenuItem value={idx} key={idx}>
                  {it.address}
                </MenuItem>
              ))}
            {/* <MenuItem value="">Thêm địa chỉ mới ...</MenuItem> */}
          </Select>
        </FormControl>

        <Grid container spacing={1} justifyContent="space-between">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField
              disabled
              className={styles.input}
              variant="outlined"
              placeholder="Số điện thoại"
              onChange={(e) => handleChange(e.target.value, 'phone')}
              value={allInforDeliver?.phone}
            />
          </Grid>
        </Grid>
        <Addresses
          data={data}
          state={state}
          deliver={deliver}
          handleChange={handleChange}
          allInforDeliver={allInforDeliver}
          handleChangeInforDeliver={handleChangeInforDeliver}
          // handleDeliver={handleDeliver}
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
