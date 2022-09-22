import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { IoMdArrowDropup } from 'react-icons/io';
import { Button, TextField } from '@material-ui/core';
import Link from 'next/link';

export default function Account({ openAccount, setOpenAccount }) {
  const [backUp, setBackUp] = useState(false);
  const handleBackup = () => {
    if (backUp === true) {
      setBackUp(false);
    } else {
      setBackUp(true);
    }
  };
  return (
    <div
      className={clsx(styles.showAccount, {
        [styles.active]: openAccount === true,
      })}
    >
      <div className={styles.dropUp}>
        <IoMdArrowDropup />
      </div>
      <div className={styles.account}>
        <div
          className={clsx(styles.one, { [styles.active]: backUp === false })}
        >
          <div className={styles.headerAccount}>
            <h3>ĐĂNG NHẬP TÀI KHOẢN</h3>
            <h5>Nhập email và mật khẩu của bạn:</h5>
          </div>
          <div className={styles.formLogin}>
            <TextField
              variant="outlined"
              label="Email"
              size="small"
              className={styles.input}
            />
            <TextField
              variant="outlined"
              label="Mật khẩu"
              size="small"
              className={styles.input}
            />
            <div className={styles.recap}>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </div>
            <div className={styles.ButtonLogin}>
              <Button>ĐĂNG NHẬP</Button>
            </div>
            <div className={styles.siteAccount}>
              <div>
                Khách hàng mới?
                <Link href="/account/register"> Tạo tài khoản</Link>
              </div>
              <div className={styles.backup}>
                Quên mật khẩu?{' '}
                <span onClick={handleBackup}>Khôi Phục mật khẩu</span>
              </div>
            </div>
          </div>
        </div>
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
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </div>
            <div className={styles.buttonbackup}>
              <Button>Khôi phục</Button>
            </div>
            <div className={styles.siteAccount}>
              <div className={styles.backup}>
                Bạn đã nhớ mật khẩu?
                <span onClick={handleBackup}> Trở về đăng nhập</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
