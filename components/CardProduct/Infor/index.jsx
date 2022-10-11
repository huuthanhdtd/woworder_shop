import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { FaLink } from 'react-icons/fa';
import { BsBagPlus } from 'react-icons/bs';
import { Button, Link, TextField, Typography } from '@material-ui/core';
import { useCart } from 'react-use-cart';
import { convertCurrency } from '../../../utils/convertCurrency';
import { useState } from 'react';
import { useEffect } from 'react';

function Infor({ product }) {
  const [isBuy, setIsBuy] = React.useState(false);

  const { addItem, updateItemQuantity, getItem, updateItem } = useCart();

  const [qtyValue, setQtyValue] = React.useState(1);

  const [sizeSelected, setSizeSelected] = useState(
    product.variation
      ? product.variation?.sizes?.[0]?.name
      : product.size
      ? product.size
      : ''
  );
  const productCart = {
    id: product.id,
    name: product.name,
    price: product.sellPrice,
    size: product.size,
    imageUrl: product.imageUrl,
    color: product.color,
    isCheck: true,
    // quantity: qtyValue,
  };

  const handleSetQtyValue = React.useCallback(
    (type) => {
      if (type === 'up') {
        setQtyValue((prev) => prev + 1);
      }
      if (type === 'down') {
        setQtyValue((prev) => prev - 1);
      }
    },
    [qtyValue]
  );
  const handleClickBuy = () => {
    setIsBuy(!isBuy);
    if (isBuy) {
      const pro = getItem(product.id);
      if (pro) {
        updateItemQuantity(pro.id, pro.quantity + qtyValue);
      } else {
        addItem(productCart, qtyValue);
      }
      setQtyValue(1);
    }
  };
  console.log(product);
  return (
    <div className={styles.infor} onMouseLeave={() => setIsBuy(false)}>
      <div className={styles.description}>
        <div className={styles.inforDetail}>
          <Link href={`/product/${product.id}`}>
            <Typography variant="h6" className={styles.name}>
              <span>{product.name.charAt(0).toUpperCase()}</span>
              {product.name.slice(1, product.name.length)}
            </Typography>
          </Link>
          <span className={styles.atb}>
            Giá gốc:
            <span className={styles.rating}>{product.webPrice}</span>
            {/* <span className={styles.from}>UK</span> */}
            <span className={styles.trademark}>ZARA</span>
          </span>
          {product.variation?.colors ? (
            <span className={styles.atb}>
              Màu:
              <p className={styles.atbValues}>
                {product.variation.colors?.map((color, idx) => (
                  <span key={idx}>
                    {color.name}
                    {idx + 1 === product.variation.colors.length ? '' : '/'}
                  </span>
                ))}
              </p>
            </span>
          ) : (
            product.color && (
              <span className={styles.atb}>
                Màu:
                <p className={styles.atbValues}>
                  <span>{product.color}</span>
                </p>
              </span>
            )
          )}
          {product.variation ? (
            <>
              <span className={styles.atb}>
                Size:
                {product.variation?.colors && (
                  <p className={styles.atbValues}>
                    {product.variation?.colors?.map((color, idx) =>
                      color.sizes.map((size, idx) => (
                        <span key={idx} style={{ textTransform: 'uppercase' }}>
                          {size.name}
                          {idx + 1 === color.sizes.length ? '' : '/'}
                        </span>
                      ))
                    )}
                  </p>
                )}
                {product.variation?.sizes && (
                  <p className={styles.atbValues}>
                    {product.variation?.sizes?.map((size, idx) => (
                      <span key={idx} style={{ textTransform: 'uppercase' }}>
                        {size.name}
                        {idx + 1 === product.variation?.sizes?.length
                          ? ''
                          : '/'}
                      </span>
                    ))}
                  </p>
                )}
              </span>
            </>
          ) : product.size ? (
            <span className={styles.atb}>
              Size: <p className={styles.atbValues}> {product.size}</p>
            </span>
          ) : (
            ''
          )}
        </div>
        <span className={styles.price}>
          <span className={styles.prevPrice}>
            {convertCurrency(product.sellPrice)}
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
        <div
          className={clsx(styles.optionBox, {
            [styles.optionBoxActive]: true,
          })}
        >
          {product.variation ? (
            <div className={styles.boxSizes}>
              <span>Size:</span>
              {product.variation?.colors && (
                <div className={styles.sizes}>
                  {product.variation?.colors?.map((color, idx) =>
                    color.sizes.map((size, idx) => (
                      <span
                        className={clsx(styles.atbValueItem, {
                          [styles.selected]: size.name === sizeSelected,
                        })}
                        key={idx}
                        style={{ textTransform: 'uppercase' }}
                        onClick={() => setSizeSelected(size.name)}
                      >
                        {size.name}
                      </span>
                    ))
                  )}
                </div>
              )}
            </div>
          ) : // <span className={styles.atb}>
          //   Size:
          //   {product.variation?.colors && (
          //     <span className={styles.atbValues}>
          //       {product.variation?.colors?.map((color, idx) =>
          //         color.sizes.map((size, idx) => (
          //           <span
          //             className={clsx(styles.atbValueItem, {
          //               [styles.selected]: size.name === sizeSelected,
          //             })}
          //             key={idx}
          //             style={{ textTransform: 'uppercase' }}
          //             onClick={() => setSizeSelected(size.name)}
          //           >
          //             {size.name}
          //           </span>
          //         ))
          //       )}
          //     </span>
          //   )}
          //   <span className={styles.atbValues}>
          //     {product.variation.sizes.map((size, idx) => (
          //       <span
          //         className={clsx(styles.atbValueItem, {
          //           [styles.selected]: size.name === sizeSelected,
          //         })}
          //         key={idx}
          //         style={{ textTransform: 'uppercase' }}
          //         onClick={() => setSizeSelected(size.name)}
          //       >
          //         {size.name}
          //       </span>
          //     ))}
          //   </span>
          // </span>
          product.size ? (
            <span className={styles.atb}>
              Size:{' '}
              <span className={styles.atbValues}>
                <span
                  className={clsx(styles.atbValueItem, {
                    [styles.selected]: true,
                  })}
                  style={{ textTransform: 'uppercase' }}
                >
                  {product.size}
                </span>
              </span>
            </span>
          ) : (
            ''
          )}
          <div className={styles.selectQty}>
            <span>SL: </span>
            <div className={styles.qtyInput}>
              <button
                className={clsx(styles.qtyPress, {
                  [styles.disabled]: qtyValue === 1,
                })}
                disabled={qtyValue === 1 ? true : false}
                onClick={() => {
                  handleSetQtyValue('down');
                }}
              >
                -
              </button>
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  readOnly: true,
                }}
                value={qtyValue}
                focused={false}
              />
              <button
                className={styles.qtyPress}
                onClick={() => {
                  handleSetQtyValue('up');
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnBuy}>
        <div
          className={clsx(styles.boxButton, {
            [styles.addToCart]: isBuy,
          })}
        >
          <Button className={styles.button} onClick={handleClickBuy}>
            <span className={styles.iconAdd}>
              <BsBagPlus />
            </span>
            <span className={styles.label}>
              {isBuy ? 'Thêm vào giỏ' : 'Chọn mua'}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Infor;
