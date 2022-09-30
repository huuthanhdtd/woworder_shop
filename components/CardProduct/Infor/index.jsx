import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { FaLink } from 'react-icons/fa';
import { BsBagPlus } from 'react-icons/bs';
import { Button, TextField, Typography } from '@material-ui/core';
import { useCart } from 'react-use-cart';

const products = [
  {
    id: 1,
    name: 'Malm',
    price: 9900,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Nordli',
    price: 16500,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Kullen',
    price: 4500,
    quantity: 1,
  },
];

function Infor() {
  const [isBuy, setIsBuy] = React.useState(false);

  const { addItem, updateItemQuantity, getItem, updateItem } = useCart();

  const [qtyValue, setQtyValue] = React.useState(1);

  const handleSetQtyValue = React.useCallback((type) => {
    if (type === 'up') {
      setQtyValue((prev) => prev + 1);
    }
    if (type === 'down') {
      setQtyValue((prev) => prev - 1);
    }
  }, []);
  return (
    <div className={styles.infor}>
      <Typography variant="h3" className={styles.name}>
        Blackmores Celery 3000mg Mild Ache Relief 50 Tablets
      </Typography>
      <span className={styles.atb}>
        Màu: <p className={styles.atbValues}>Dusty rose/Unicorns</p>
      </span>
      <span className={styles.atb}>
        Size: <p className={styles.atbValues}> XS/S/M/L/XL/XXL</p>
      </span>

      <span className={styles.atb} style={{ margin: '5px 0' }}>
        Giá gốc:
        <span className={styles.rating}>4.6</span>
        {/* <span className={styles.from}>UK</span> */}
        <span className={styles.trademark}>ZARA</span>
      </span>
      <span className={styles.price}>
        <span className={styles.prevPrice}>
          190.000 <small>đ</small>
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=0uDRsIYJ5X4&ab_channel=FendiMusic"
        >
          <span className={styles.link}>
            <FaLink className={styles.linkIcon} />
          </span>
        </a>
      </span>
      <div className={styles.btnBuy}>
        <div
          className={clsx(styles.qtyInput, {
            [styles.active]: isBuy,
          })}
        >
          <Button
            className={styles.qtyPress}
            disabled={qtyValue === 1 ? true : false}
            onClick={() => {
              updateItem(2, { quantity: qtyValue });
              handleSetQtyValue('down');
            }}
          >
            -
          </Button>
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true,
              readOnly: true,
            }}
            value={qtyValue}
            focused={false}
          />
          <Button
            className={styles.qtyPress}
            onClick={() => {
              updateItem(2, { quantity: qtyValue });
              handleSetQtyValue('up');
            }}
          >
            +
          </Button>
        </div>
        <div
          className={clsx(styles.boxButton, {
            [styles.close]: isBuy,
          })}
        >
          <Button
            className={styles.button}
            onClick={() => {
              addItem(products[1]);
              setIsBuy(true);
            }}
          >
            <span className={styles.iconAdd}>
              <BsBagPlus />
            </span>
            <span className={styles.label}>Chọn mua</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Infor;
