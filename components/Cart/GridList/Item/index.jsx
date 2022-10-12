import { Box, Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import { convertCurrency } from '../../../../utils/convertCurrency';

export default function Item({
  data,
  checked,
  handleChangeItem,
  removeItem,
  updateItemQuantity,
}) {
  return (
    <div className={styles.product}>
      <Box>
        {checked && (
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={checked.includes(data.id)}
                onChange={(event) =>
                  handleChangeItem(event.target.checked, data.id)
                }
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
          />
        )}
      </Box>
      <div className={styles.media_image}>
        <div className={styles.item_image}>
          <img src={data.imageUrl} />
        </div>
        <div className={styles.item_Remove} onClick={() => removeItem(data.id)}>
          xoá
        </div>
      </div>
      <div className={styles.media_desc}>
        <div className={styles.item_info}>{data.name}</div>
        <div className={styles.Characteristics}>{data.color}</div>
        <div className={styles.item_price}>{convertCurrency(data.price)}</div>
      </div>
      <div className={styles.media_totla}>
        <div className={styles.item_price}>{convertCurrency(data.price)}</div>
        <div className={styles.item_quatity}>
          <button
            onClick={() => updateItemQuantity(data.id, data.quantity - 1)}
          >
            -
          </button>
          <div className={styles.amount}>{data.quantity}</div>
          <button
            onClick={() => updateItemQuantity(data.id, data.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
