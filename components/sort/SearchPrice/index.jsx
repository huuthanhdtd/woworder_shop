import { Button } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export default function SearchPrice({ formPrice, setFormPrice }) {
  const [formPriceValues, setFormPriceValues] = useState({
    priceFirst: '',
    priceLast: '',
  });

  const [msg, setmsg] = useState('');
  const handleOnChange = (e) => {
    e.target.value =
      !!e.target.value && Math.abs(e.target.value) >= 0
        ? Math.abs(e.target.value)
        : null;
    if (e.target.value.length == 10) return false;
    let { name, value } = e.target;
    value = Number(value);
    setFormPriceValues({ ...formPriceValues, [name]: value });
  };
  useEffect(() => {
    setmsg('');
  }, [formPriceValues]);
  const handleSubmit = () => {
    if (
      formPriceValues.priceFirst > formPriceValues.priceLast
      // ||
      // formPriceValues.priceLast == 0
    ) {
      return setmsg('Vui lòng điền khoảng giá phù hợp');
    } else {
      setFormPrice(formPriceValues);
    }
  };
  return (
    <>
      <div className={styles.SearchPrice}>
        <h2> Khoảng giá</h2>
        <div className={styles.input}>
          <input
            type="number"
            style={{
              width: '47%',
              padding: '5px',
              fontSize: '0.75rem',
            }}
            name="priceFirst"
            placeholder="Từ"
            value={formPriceValues.priceFirst || ''}
            onChange={(e) => handleOnChange(e)}
          />
          <div>-</div>
          <input
            type="number"
            style={{
              width: '47%',
              padding: '5px',
              fontSize: '0.75rem',
            }}
            name="priceLast"
            placeholder="Đến"
            value={formPriceValues.priceLast || ''}
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
