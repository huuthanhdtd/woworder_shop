import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { Button, TextField } from '@material-ui/core';

export default function Restore({ backUp, setBackUp }) {
  const Restores = () => {
    setBackUp(false);
  };
  return (
    <div className={clsx(styles.two, { [styles.active]: backUp === true })}>
      <div className={styles.FormBackUp}>
        <div className={styles.headerTitle}>
          <h3>KHÔI PHỤC MẬT KHẨU</h3>
          <h5>Nhập email của bạn:</h5>
        </div>
        <div className={styles.BackUpForm}>
          <TextField
            variant="outlined"
            label="email"
            className={styles.inputBackup}
            size="small"
          />
        </div>
        <div className={styles.recap}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
        <div className={styles.buttonbackup}>
          <Button onClick={Restores}>Khôi phục</Button>
        </div>
        <div className={styles.siteAccount}>
          <div className={styles.backup}>
            Bạn đã nhớ mật khẩu?
            <span onClick={() => setBackUp(false)}> Trở về đăng nhập</span>
          </div>
        </div>
      </div>
    </div>
  );
}
