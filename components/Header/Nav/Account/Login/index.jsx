import React, { useState } from 'react';
import FormLogin from './FormLogin';
import Restore from './restore';
import styles from './styles.module.scss';

export default function Login({ setSuccess, setOpenAccount }) {
  const [backUp, setBackUp] = useState(false);

  return (
    <div className={styles.account}>
      <FormLogin
        backUp={backUp}
        setBackUp={setBackUp}
        setSuccess={setSuccess}
        setOpenAccount={setOpenAccount}
      />
      <Restore backUp={backUp} setBackUp={setBackUp} />
    </div>
  );
}
