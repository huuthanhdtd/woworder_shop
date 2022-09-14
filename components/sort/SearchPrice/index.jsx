import { Button } from '@material-ui/core';
import React, { useState } from 'react';
// import { currencyMask } from '../../../lib';
import styles from './styles.module.scss';

export default function SearchPrice() {
  const [state, setState] = useState({ price: '' });
  // const handleOnchange = (e) => {
  //   setState({ ...state, [e.target.value]: e.target.value });
  //   console.log(e.target.value);
  // };
  const handleOnchange = (e) => {
    setState({ ...state, [e.target.value]: e.target.value });
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1. $2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ',');
    e.target.value = value;

    console.log(state.price);
  };
  return (
    <>
      <div className={styles.SearchPrice}>
        <div className={styles.input}>
          <input
            type="number"
            style={{ width: '45%' }}
            name="price"
            placeholder="Từ"
            // value={state.price}
            onChange={(e) => handleOnchange(e)}
            // onChange={(e) => {
            //   const { value } = e.target;
            //   e.target.value = normalizeCardNumber(value);
            // }}
          />
          <div>-</div>
          <input type="number" style={{ width: '45%' }} placeholder="Đến" />
        </div>
        <Button>Áp Dụng</Button>
      </div>
    </>
  );
}
