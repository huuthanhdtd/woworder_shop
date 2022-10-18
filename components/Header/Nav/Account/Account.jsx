import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { IoMdArrowDropup } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';
import { Button, TextField } from '@material-ui/core';
import Login from './Login';
import LoginSuccess from './loginSuccess';

export default function Account({
  openAccount,
  setOpenAccount,
  setSuccess,
  auth,
  name,
}) {
  return (
    <div
      className={clsx(styles.showAccount, {
        [styles.active]: openAccount === true,
      })}
    >
      <div className={styles.dropUp}>
        <IoMdArrowDropup />
      </div>
      {auth.token !== null ? (
        <>
          <LoginSuccess
            setSuccess={setSuccess}
            setOpenAccount={setOpenAccount}
            name={name}
          />
        </>
      ) : (
        <Login setSuccess={setSuccess} setOpenAccount={setOpenAccount} />
      )}
      <div className={styles.buttonClose}>
        <Button onClick={() => setOpenAccount(false)}>
          <RiCloseFill fontSize={20} />
        </Button>
      </div>
    </div>
  );
}
