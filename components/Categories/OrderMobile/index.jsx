import { MenuItem, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { orderButton, orderPrice } from '../../../constants/commonData';
import styles from './styles.module.scss';

const OrderMobile = ({ listInOrder }) => {
  const inorderTexts = orderButton.concat(orderPrice);
  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.active]: listInOrder,
      })}
    >
      {inorderTexts.map((it, idx) => (
        <MenuItem
          className={styles.item}
          key={idx}
          onClick={() => {
            console.log('click');
          }}
        >
          {it.name}
        </MenuItem>
      ))}
    </div>
  );
};

export default OrderMobile;
