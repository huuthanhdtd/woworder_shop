import {
  TextField,
  // Checkbox,
  // FormControlLabel,
  Button,
  Typography,
} from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import { AiOutlineUser } from 'react-icons/ai';
import { RiHome8Fill } from 'react-icons/ri';
import { ImLocation2, ImPhone } from 'react-icons/im';
import cityList from '../../../../constants/local.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAddressRequest,
  updateAddressRequest,
} from '../../../../store/actions/customer';
// import { BsFillHouseFill } from 'react-icons/bs';
// import { MdOutlineMailOutline } from 'react-icons/md';

const Form = ({ submitTitle, cancel, detail }) => {
  const additionForm = submitTitle === 'Cập nhật' ? true : false;
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({
    name: detail.name,
    phone: detail.phone,
    province: additionForm ? detail.province || '-' : '',
    district: additionForm ? detail.district || '-' : '',
    ward: additionForm ? detail.ward || '-' : '',
    address: detail.address,
    // rewardPoint: 300,
    // email: '',
    // company: '',
  });
  const listLocations = React.useMemo(() => {
    const cityData = cityList;
    const districtData =
      detail.province !== '' && detail.province !== '-'
        ? cityData.find((it) => it.name === detail.province).districts
        : null;
    const wardData = districtData
      ? districtData.find((it) => it.name === detail.district).wards
      : null;

    return {
      cityData,
      districtData,
      wardData,
    };
  }, [detail.province, detail.district]);

  const [addresses, setAddresses] = React.useState({
    cities: listLocations.cityData,
    districts: additionForm ? listLocations.districtData : null,
    wards: additionForm ? listLocations.wardData : null,
  });

  const { cities, districts, wards } = addresses;

  const handleOnchangeAddress = React.useCallback(
    (input, e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [input]: value }));
      if (name === 'city') {
        if (value === '') {
          setAddresses({
            cities: listLocations.cityData,
            districts: null,
            wards: null,
          });
        } else {
          setAddresses((prev) => ({
            ...prev,
            districts: cities.find((it) => it.name === value).districts,
          }));
        }
      }
      if (name === 'district') {
        setAddresses((prev) => ({
          ...prev,
          wards: districts.find((it) => it.name === value).wards,
        }));
      }
    },
    [addresses.cities, addresses.districts, addresses.wards]
  );

  const handleOnchangeForm = React.useCallback((input, value) => {
    setForm((prev) => ({ ...prev, [input]: value }));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (submitTitle === 'Thêm mới') {
      dispatch(createAddressRequest(form));
      cancel();
    }
    if (submitTitle === 'Cập nhật') {
      dispatch(updateAddressRequest(form, detail.id));
      cancel();
    }
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        {cities && (
          <div className={styles.wrapSelect}>
            <div className={styles.iconSelect}>
              <RiHome8Fill />
            </div>
            <select
              value={form.province}
              name="city"
              className={styles.select}
              onChange={(e) => handleOnchangeAddress('province', e)}
            >
              <option value="">Tỉnh/ thành</option>
              {cities.map((ct, idx) => (
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
              value={form.district}
              name="district"
              className={styles.select}
              onChange={(e) => handleOnchangeAddress('district', e)}
            >
              <option value="">Quận/ huyện</option>
              {districts.map((ct, idx) => (
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
              value={form.ward}
              name="ward"
              className={styles.select}
              onChange={(e) => handleOnchangeAddress('ward', e)}
            >
              <option value="">Xã/ phường</option>
              {wards.map((ct, idx) => (
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
            type="submit"
            // onClick={handleSubmit}
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
