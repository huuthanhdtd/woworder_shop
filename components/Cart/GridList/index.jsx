import { Checkbox, FormControlLabel } from '@material-ui/core';
import React, { useEffect } from 'react';
import Item from './Item';
import styles from './styles.module.scss';

export default function GridList({
  items,
  totalItems,
  checked,
  removeItem,
  setChecked,
  updateItemQuantity,
  updateItem,
  setNote,
  note,
}) {
  const handleChangeAll = (isChecked) => {
    if (isChecked) {
      return setChecked(items.map((data) => data.id));
    } else {
      setChecked([]);
      for (let i = 0; i < checked.length; i++) {
        updateItem(checked[i], {
          isCheck: false,
        });
      }
    }
  };
  useEffect(() => {
    for (let i = 0; i < checked.length; i++) {
      updateItem(checked[i], {
        isCheck: true,
      });
    }
  }, [checked]);
  const handleChangeItem = (isChecked, id) => {
    const index = checked.indexOf(id);
    if (isChecked) {
      updateItem(id, {
        isCheck: true,
      });
    }
    if (isChecked) return setChecked((state) => [...state, id]);
    if (!isChecked && index > -1)
      updateItem(id, {
        isCheck: false,
      });
    return setChecked((state) => {
      state.splice(index, 1);
      return JSON.parse(JSON.stringify(state));
    });
  };
  useEffect(() => {
    handleChangeAll(true);
  }, []);
  const handleOnChange = (e) => {
    setNote(e.target.value);
  };
  return (
    <div className={styles.GridList}>
      <h3>Giỏ hàng của bạn</h3>
      {items.length > 0 ? (
        <div className={styles.listCart}>
          <p className={styles.title_cart}>
            bạn đang có{' '}
            <strong style={{ color: '#000' }}>{totalItems} sản phẩm</strong>{' '}
            trong giỏ hàng
          </p>
          <div className={styles.boderCarts}>
            <FormControlLabel
              label="Tất cả"
              control={
                <Checkbox
                  size="small"
                  checked={checked.length === items.length}
                  // indeterminate={
                  //   checked.length !== items.items && checked.length > 0
                  // }
                  onChange={(event) => handleChangeAll(event.target.checked)}
                />
              }
            />
            {items?.map((data, index) => (
              <Item
                key={index}
                data={data}
                index={index}
                checked={checked}
                handleChangeItem={handleChangeItem}
                removeItem={removeItem}
                updateItemQuantity={updateItemQuantity}
              />
            ))}
          </div>
          <div className={styles.note}>
            <label className={styles.title_label}>Ghi chú đơn hàng</label>
            <textarea
              rows={5}
              className={styles.formControl}
              name="note"
              value={note || ''}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div className={styles.invoice}></div>
        </div>
      ) : (
        <div
          style={{
            fontSize: '17px',
            margin: '0',
            padding: '20px 16px',
            textAlign: 'left',
          }}
        >
          Giỏ hàng của bạn đang trống
        </div>
      )}
    </div>
  );
}
