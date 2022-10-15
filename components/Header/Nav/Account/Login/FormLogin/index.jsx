import { Button, Link, TextField } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './styles.module.scss';

export default function FormLogin({ backUp, setBackUp, setOpenAccount }) {
  const [validationMsg, setValidationMsg] = useState({});
  const [formValue, setFormValue] = useState({
    account: '',
    password: '',
  });
  const form = {
    address: 'hoa vang da nang',
    city: 'DDN',
    company: 'Tipici',
    districts: 'Hòa Vang',
    email: 'huy@gmail.com',
    firstname: 'Tran',
    lastname: 'Quang Huy',
    nation: 'VN',
    phone: '0909000000',
    rewardPoint: 300,
    wards: 'Hòa Khương',
    customerCode: 'M90C90',
  };

  const { account, password } = formValue;
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validatorAll = () => {
    const msg = {};
    if (account.length <= 0) {
      msg.account = 'vui lòng nhập tài khoản';
    }
    if (password.length <= 0) {
      msg.password = 'vui lòng nhập mât khẩu';
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleLogin = () => {
    const valid = validatorAll();
    if (!valid) return;
    if (valid) {
      setOpenAccount(false);
      localStorage.setItem('USER_INFOR', JSON.stringify(form));
    }
  };
  return (
    <div className={clsx(styles.one, { [styles.active]: backUp === false })}>
      <div className={styles.headerAccount}>
        <h3>ĐĂNG NHẬP TÀI KHOẢN</h3>
        <h5>Nhập email và mật khẩu của bạn:</h5>
      </div>
      <div className={styles.formLogin}>
        <TextField
          variant="outlined"
          label="Email"
          name="account"
          size="small"
          value={account || ''}
          onChange={handleOnChange}
          className={styles.input}
          style={{
            marginBottom: `${validationMsg.account ? '0' : '15px'}`,
          }}
        />
        <div className={styles.err}>{validationMsg.account}</div>
        <TextField
          type="password"
          variant="outlined"
          label="Mật khẩu"
          name="password"
          value={password || ''}
          onChange={handleOnChange}
          size="small"
          className={styles.input}
          style={{
            marginBottom: `${validationMsg.password ? '0' : '10px'}`,
          }}
        />
        <div className={styles.err}>{validationMsg.password}</div>
        <div className={styles.recap}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
        <div className={styles.ButtonLogin}>
          <Button onClick={handleLogin}>ĐĂNG NHẬP</Button>
        </div>
        <div className={styles.siteAccount}>
          <div onClick={() => setOpenAccount(false)}>
            Khách hàng mới?
            <Link href="/account/register"> Tạo tài khoản</Link>
          </div>
          <div className={styles.backup}>
            Quên mật khẩu?{' '}
            <span onClick={() => setBackUp(true)}>Khôi Phục mật khẩu</span>
          </div>
        </div>
      </div>
    </div>
  );
}
