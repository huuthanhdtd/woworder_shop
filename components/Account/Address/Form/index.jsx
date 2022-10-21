import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
} from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillHouseFill } from 'react-icons/bs';
import { RiHome8Fill } from 'react-icons/ri';
import { MdOutlineMailOutline } from 'react-icons/md';
import { ImLocation2, ImPhone } from 'react-icons/im';
import { citieslist, nations } from '../../../../constants/selectListData';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAddressRequest,
  updateAddressRequest,
} from '../../../../store/actions/customer';

const Form = ({ submitTitle, cancel, detail }) => {
  const {
    user: { included },
  } = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    name: detail.name,
    phone: detail.phone,
    province: detail.province || '-',
    district: detail.district || '-',
    ward: detail.ward || '-',
    address: detail.address,
    // rewardPoint: 300,
    // email: '',
    // company: '',
    // firstname: '',
    // nation: '',
  });
  // console.log(form);
  // console.log(included.addresses[0].address);
  const [addresses, setAddresses] = React.useState({
    cities: citieslist.find((it) => it.symbol === 'VN'),
    districts: null,
    wards: null,
  });

  const { cities, districts, wards } = addresses;

  const handleOnchangeAddress = React.useCallback(
    (input, e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [input]: value }));
      // if (name === 'nation') {
      //   if (value === '') {
      //     setAddresses({
      //       cities: null,
      //       districts: null,
      //       wards: null,
      //     });
      //     return;
      //   }
      //   setAddresses((prev) => ({
      //     ...prev,
      //     cities: citieslist.find((it) => it.symbol === value),
      //   }));
      // }
      if (name === 'city') {
        setAddresses((prev) => ({
          ...prev,
          districts: cities.cities.find((it) => it.name === value),
        }));
        if (value === '') {
          setAddresses({
            cities: citieslist.find((it) => it.symbol === 'VN'),
            districts: null,
            wards: null,
          });
        }
      }
      if (name === 'district') {
        setAddresses((prev) => ({
          ...prev,
          wards: districts.districts.find((it) => it.name === value),
        }));
      }
    },
    [addresses.cities, addresses.districts, addresses.wards]
  );

  const handleOnchangeForm = React.useCallback((input, value) => {
    setForm((prev) => ({ ...prev, [input]: value }));
  }, []);
  const handleSubmit = () => {
    if (submitTitle === 'Thêm mới') {
      dispatch(createAddressRequest(form));
    }
    if (submitTitle === 'Cập nhật') {
      dispatch(updateAddressRequest(form, detail.id));
    }
    // localStorage.setItem('USER_INFOR', JSON.stringify(form));
  };
  console.log(detail.id);
  return (
    <div className={styles.wrapper}>
      <form action="" className={styles.form}>
        {/* <TextField
          onChange={(e) => handleOnchangeForm('firstname', e.target.value)}
          placeholder="Họ"
          variant="outlined"
          className={styles.input}
          value={form.address || ''}
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <AiOutlineUser />
              </div>
            ),
          }}
        /> */}
        {/* <TextField
          onChange={(e) => handleOnchangeForm('company', e.target.value)}
          placeholder="Công ty"
          variant="outlined"
          className={styles.input}
          value={form.company || ''}
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <BsFillHouseFill />
              </div>
            ),
          }}
        /> */}
        {/* <TextField
          onChange={(e) => handleOnchangeForm('email', e.target.value)}
          placeholder="Email"
          variant="outlined"
          className={styles.input}
          value={form.email || ''}
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <MdOutlineMailOutline />
                </div>
                ),
              }}
            /> */}
        <TextField
          onChange={(e) => handleOnchangeForm('fullname', e.target.value)}
          placeholder="Tên"
          variant="outlined"
          className={styles.input}
          value={form.name || ''}
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <AiOutlineUser />
              </div>
            ),
          }}
        />
        <TextField
          onChange={(e) => handleOnchangeForm('address', e.target.value)}
          placeholder="Địa chỉ"
          variant="outlined"
          className={styles.input}
          value={form.address || ''}
          error={form.address === '' ? true : false}
          helperText={form.address === '' ? 'Nhập địa chỉ của bạn' : ''}
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <RiHome8Fill />
              </div>
            ),
          }}
        />
        {/* <div className={styles.wrapSelect}>
          <div className={styles.iconSelect}>
            <ImLocation2 />
          </div>
          <select
            name="nation"
            className={styles.select}
            onChange={(e) => handleOnchangeAddress('nation', e)}
          >
            <option value="">-- Please Select --</option>
            {nations.map((na, idx) => (
              <option value={na.symbol} key={idx}>
                {na.name}
              </option>
            ))}
          </select>
        </div> */}
        {cities && (
          <div className={styles.wrapSelect}>
            <div className={styles.iconSelect}>
              <RiHome8Fill />
            </div>
            <select
              name="city"
              className={styles.select}
              onChange={(e) => handleOnchangeAddress('province', e)}
            >
              <option value="">Tỉnh/ thành</option>
              {cities.cities.map((ct, idx) => (
                <option value={ct.name} key={idx}>
                  {ct.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {districts && (
          <div className={styles.wrapSelect}>
            <div className={styles.iconSelect}>
              <RiHome8Fill />
            </div>
            <select
              name="district"
              className={styles.select}
              onChange={(e) => handleOnchangeAddress('district', e)}
            >
              <option value="">Quận/ huyện</option>
              {districts.districts.map((ct, idx) => (
                <option value={ct.code} key={idx}>
                  {ct.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {wards && (
          <div className={styles.wrapSelect}>
            <div className={styles.iconSelect}>
              <RiHome8Fill />
            </div>
            <select
              name="ward"
              className={styles.select}
              onChange={(e) => handleOnchangeAddress('ward', e)}
            >
              <option value="">Xã/ phường</option>
              {wards.wards.map((ct, idx) => (
                <option value={ct.name} key={idx}>
                  {ct.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <TextField
          onChange={(e) => handleOnchangeForm('phone', e.target.value)}
          placeholder="Sđt"
          variant="outlined"
          className={styles.input}
          value={form.phone || ''}
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <ImPhone />
              </div>
            ),
          }}
        />
        {/* <FormControlLabel
          control={<Checkbox size="small" name="checkedA" />}
          label="Đặt làm địa chỉ mặc định."
        /> */}
        <div className={styles.boxSubmit}>
          <Button
            className={styles.submit}
            disabled={
              form.address === '' || form.name === '' || form.phone === ''
                ? true
                : false
            }
            onClick={handleSubmit}
          >
            {submitTitle}
          </Button>
          <Typography variant="body2">
            hoặc
            <Button onClick={cancel}>Hủy</Button>
          </Typography>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Form);
