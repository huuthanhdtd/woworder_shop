import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

export default function LoginSuccess({ userData, setOpenAccount }) {
  const Logout = () => {
    localStorage.removeItem('USER_INFOR');
    setOpenAccount(false);
  };
  return (
    <div className={styles.loginSuccess}>
      <div className={styles.titleLogin}>
        <p>Thông tin tài khoản</p>
      </div>
      <div>
        {userData.firstname} {userData.lastname}
      </div>
      <ul>
        <li>
          <Link href="/account">Tài khoản của tôi</Link>
        </li>
        <li>
          <Link href="/account/address">Danh sách địa chỉ</Link>
        </li>
        <li onClick={Logout}>Đăng xuất</li>
      </ul>
    </div>
  );
}
