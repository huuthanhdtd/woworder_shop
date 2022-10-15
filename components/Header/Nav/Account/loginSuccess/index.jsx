import { Link } from '@material-ui/core';
import React from 'react';
import { myAccount } from '../../../../../constants/commonData';
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
        {myAccount.slice(0, 3).map((data, index) => (
          <li key={index}>
            <Link href={data.link}>{data.name}</Link>
          </li>
        ))}
        <li onClick={Logout}>Đăng xuất</li>
      </ul>
    </div>
  );
}
