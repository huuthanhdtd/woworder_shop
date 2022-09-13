import { TextField } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';

export default function Search() {
  return (
    <div className={styles.search}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        placeholder="nhập url/ mã/ tên sản phẩm"
        className={styles.input}
      />
      <div></div>
    </div>
  );
}
