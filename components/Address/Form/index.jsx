import {
  TextField,
  InputAdornment,
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
import { ImLocation2, ImPhone } from 'react-icons/im';
import { citieslist, nations } from '../../../constants/selectListData';

const Form = ({ submitTitle, cancel }) => {
  const [form, setForm] = React.useState({});
  const [cities, setCities] = React.useState(null);

  const handleOnchangeNation = React.useCallback((input, value) => {
    setForm((prev) => ({ ...prev, [input]: value }));
    setCities(citieslist.find((it) => it.symbol === value));
  }, []);

  const handleOnchangeForm = React.useCallback((input, value) => {
    setForm((prev) => ({ ...prev, [input]: value }));
  }, []);

  return (
    <div className={styles.wrapper}>
      <form action="" className={styles.form}>
        <TextField
          onChange={(e) => handleOnchangeForm('firstname', e.target.value)}
          placeholder="Họ"
          variant="outlined"
          className={styles.input}
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <AiOutlineUser />
              </div>
            ),
          }}
        />
        <TextField
          onChange={(e) => handleOnchangeForm('lastname', e.target.value)}
          placeholder="Tên"
          variant="outlined"
          className={styles.input}
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <AiOutlineUser />
              </div>
            ),
          }}
        />
        <TextField
          onChange={(e) => handleOnchangeForm('company', e.target.value)}
          placeholder="Công ty"
          variant="outlined"
          className={styles.input}
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <BsFillHouseFill />
              </div>
            ),
          }}
        />
        <TextField
          onChange={(e) => handleOnchangeForm('address1st', e.target.value)}
          placeholder="Địa chỉ 1"
          variant="outlined"
          className={styles.input}
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <RiHome8Fill />
              </div>
            ),
          }}
        />
        <TextField
          onChange={(e) => handleOnchangeForm('address2nd', e.target.value)}
          placeholder="Địa chỉ 2"
          variant="outlined"
          className={styles.input}
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <RiHome8Fill />
              </div>
            ),
          }}
        />

        <div className={styles.wrapSelect}>
          <div className={styles.iconSelect}>
            <ImLocation2 />
          </div>
          <select
            name="nation"
            className={styles.select}
            onChange={(e) => handleOnchangeNation('nation', e.target.value)}
          >
            <option value="#">-- Please Select --</option>
            {nations.map((na, idx) => (
              <option value={na.symbol} key={idx}>
                {na.name}
              </option>
            ))}
          </select>
        </div>
        {cities && (
          <div className={styles.wrapSelect}>
            <div className={styles.iconSelect}>
              <ImLocation2 />
            </div>
            <select
              name="city"
              className={styles.select}
              onChange={(e) => handleOnchangeForm('city', e.target.value)}
            >
              {cities.cities.map((ct, idx) => (
                <option value={ct.code} key={idx}>
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
          InputProps={{
            startAdornment: (
              <div className={styles.iconStart}>
                <ImPhone />
              </div>
            ),
          }}
        />

        <FormControlLabel
          control={<Checkbox size="small" name="checkedA" />}
          label="Đặt làm địa chỉ mặc định."
        />
        <div className={styles.boxSubmit}>
          <Button className={styles.submit}>{submitTitle}</Button>
          <Typography variant="body2">
            hoặc
            <Button onClick={cancel}>Hủy</Button>
          </Typography>
        </div>
      </form>
    </div>
  );
};

export default Form;
