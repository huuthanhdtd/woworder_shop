import { TextField } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Search() {
  return (
    <div className={styles.search}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        placeholder="nhập url/ mã/ tên sản..."
        className={styles.input}
      />
      <div className={styles.icons}>
        <AiOutlineSearch />
      </div>
    </div>
  );
}
