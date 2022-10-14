import React from 'react';
import { convertCurrency } from '../../../../../utils/convertCurrency';
import styles from './styles.module.scss';

export default function ItemCart({
  data,
  index,
  updateItemQuantity,
  removeItem,
}) {
  return (
    <div className={styles.viewCart} key={index}>
      <div className={styles.image}>
        <img src={data.imageUrl} />
      </div>
      <div className={styles.desc}>
        <span className={styles.nameProduct}>
          {data.name.length > 150 ? `${data.name.slice(0, 150)}...` : data.name}
        </span>
        <div className={styles.quantity}>
          <div className={styles.quantity_selector}>
            <button
              className={styles.plus_or_minus}
              onClick={() => updateItemQuantity(data.id, data.quantity - 1)}
            >
              -
            </button>
            <div className={styles.amount}>{data.quantity}</div>
            <button
              className={styles.plus_or_minus}
              onClick={() => updateItemQuantity(data.id, data.quantity + 1)}
            >
              +
            </button>
          </div>
          <div className={styles.price}>{convertCurrency(data.price)}</div>
        </div>
        <div className={styles.remove} onClick={() => removeItem(data.id)}>
          X
        </div>
      </div>
    </div>
  );
}
