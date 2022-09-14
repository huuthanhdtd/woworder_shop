import { Button } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
// import { currencyMask } from '../../../lib';
import styles from './styles.module.scss';

export default function SearchPrice() {
  const [formPrice, setFormPrice] = useState({ priceFirst: '', priceLast: '' });
  const [msg, setmsg] = useState('');
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    value = Number(value);
    setFormPrice({ ...formPrice, [name]: value });
  };
  useEffect(() => {
    setmsg('');
  }, [formPrice]);
  const handleSubmit = () => {
    if (
      formPrice.priceFirst > formPrice.priceLast ||
      formPrice.priceLast == 0
    ) {
      return setmsg('Vui lòng điền khoảng giá phù hợp');
    }
  };
  return (
    <>
      <div className={styles.SearchPrice}>
        <h2> Khoảng giá</h2>
        <div className={styles.input}>
          <input
            type="number"
            style={{ width: '47%', padding: '5px' }}
            name="priceFirst"
            placeholder="Từ"
            value={formPrice.priceFirst || ''}
            onChange={(e) => handleOnChange(e)}
          />
          <div>-</div>
          <input
            type="number"
            style={{ width: '47%', padding: '5px' }}
            name="priceLast"
            placeholder="Đến"
            value={formPrice.priceLast || ''}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <span
          className={clsx(styles.msgError, {
            [styles.active]: msg.length > 0,
          })}
        >
          {msg}
        </span>
        <Button onClick={handleSubmit}>Áp Dụng</Button>
      </div>
    </>
  );
}
