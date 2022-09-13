import { Button } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';

export default function SearchPrice() {
  return (
    <>
      <div className={styles.SearchPrice}>
        <div className={styles.input}>
          <input type="number" style={{ width: '45%' }} placeholder="Từ" />
          <div>-</div>
          <input type="number" style={{ width: '45%' }} placeholder="Đến" />
        </div>
        <Button>Áp Dụng</Button>
      </div>
    </>
  );
}
