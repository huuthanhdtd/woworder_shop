import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { BiArrowBack } from 'react-icons/bi';

export default function Register() {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.register}>
      <div className={styles.formRegister}>
        <TextField
          variant="outlined"
          placeholder="Họ"
          type="text"
          className={styles.inputForm}
        />
        <TextField
          variant="outlined"
          placeholder="Tên"
          type="text"
          className={styles.inputForm}
        />
        <RadioGroup
          value={value}
          onChange={handleChange}
          className={styles.radio}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        <TextField
          variant="outlined"
          placeholder="mm/dd/yyyy"
          type="date"
          className={styles.inputForm}
        />
        <TextField
          variant="outlined"
          placeholder="Email"
          type="emal"
          className={styles.inputForm}
        />
        <TextField
          variant="outlined"
          placeholder="Họ"
          type="password"
          className={styles.inputForms}
        />
        <div className={styles.recap}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
        <div className={styles.submit}>
          <Button>ĐĂNG KÝ</Button>
        </div>
        <div className={styles.back}>
          <BiArrowBack />
          <Link href="/">Quay lại trang chủ</Link>
        </div>
      </div>
    </div>
  );
}
