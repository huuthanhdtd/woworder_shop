import { TextField, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

export default function SortPrice({ setFilters, filters }) {
  const [msg, setmsg] = React.useState('');
  const { prices } = filters;
  const handleOnChange = (e) => {
    e.target.value =
      !!e.target.value && Math.abs(e.target.value) >= 0
        ? Math.abs(e.target.value)
        : null;
    if (e.target.value.length == 10) return false;
    let { name, value } = e.target;
    value = Number(value);
    setFilters({ ...filters, prices: { ...prices, [name]: value } });
  };

  return (
    <>
      <div className={styles.boxPrice}>
        <Typography variant="h6">
          Khoảng giá <small>(Vnd)</small>
        </Typography>
        <div className={styles.inputs}>
          <TextField
            className={styles.input}
            fullWidth
            variant="outlined"
            name="priceFirst"
            label="Từ"
            value={prices.priceFirst || ''}
            onChange={(e) => handleOnChange(e)}
            size="small"
          />
          <div>-</div>
          <TextField
            className={styles.input}
            fullWidth
            variant="outlined"
            name="priceLast"
            label="Đến"
            value={prices.priceLast || ''}
            onChange={(e) => handleOnChange(e)}
            size="small"
          />
        </div>
        <span
          className={clsx(styles.msgError, {
            [styles.active]: msg.length > 0,
          })}
        >
          {msg}
        </span>
      </div>
    </>
  );
}
