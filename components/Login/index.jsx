import { Button, TextField, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const Login = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <Typography variant="h6">Đăng nhập</Typography>
      </div>
      <div className={styles.wrapper}>
        <form action="" className={styles.form}>
          <TextField
            className={styles.input}
            placeholder="Email"
            variant="outlined"
            type="text"
          />
          <TextField
            className={styles.input}
            placeholder="Mật khẩu"
            type="password"
            variant="outlined"
          />
          <Typography variant="body2">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </Typography>
          <div className={styles.request}>
            <Button className={styles.btn}>Đăng nhập</Button>
            <div className={styles.reqAnother}>
              <Link href={'/'}>Quên mật khẩu ?</Link>
              <br />
              hoặc <Link href="/account/register">Đăng ký</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
