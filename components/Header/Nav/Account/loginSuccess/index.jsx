import React from 'react';
import { useDispatch } from 'react-redux';
import { myAccount } from '../../../../../constants/commonData';
import { logOut } from '../../../../../store/actions/auth';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function LoginSuccess({ setOpenAccount, name }) {
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logOut());
    setOpenAccount(false);
  };
  return (
    <div className={styles.loginSuccess}>
      <div className={styles.titleLogin}>
        <p>Thông tin tài khoản</p>
      </div>
      <div>{name}</div>
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
