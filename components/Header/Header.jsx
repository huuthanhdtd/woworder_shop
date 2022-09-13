import React from 'react';
import styles from './styles.module.scss';
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
      </div>
    </div>
  );
};

export default Header;
