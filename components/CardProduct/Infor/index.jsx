import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import { FaLink } from 'react-icons/fa';
import { BsBagPlus } from 'react-icons/bs';
import { Button, Link, TextField, Typography } from '@material-ui/core';
import { useCart } from 'react-use-cart';
import { convertCurrency } from '../../../utils/convertCurrency';
import TypeBox from './TypeBox';

function Infor({ product }) {
  const [isBuy, setIsBuy] = React.useState(false);

  const { addItem, updateItemQuantity, getItem, updateItem } = useCart();

  const [qtyValue, setQtyValue] = React.useState(1);

  const [sizeSelected, setSizeSelected] = React.useState({
    name: product.variation
      ? product.variation?.sizes?.[0]?.name ||
        product.variation?.colors?.[0]?.sizes?.[0].size
      : product.size
      ? product.size
      : null,
  });
  const [colorSelected, setColorSelected] = React.useState({
    name: product.variation
      ? product.variation?.colors
        ? product.variation?.colors?.[0].name
        : product.color
      : product.color
      ? product.color
      : null,
    index: 0,
  });
  // console.log(colorSelected);
  // console.log(sizeSelected);
  const productCart = {
    id: product.id,
    name: product.name,
    price: product.sellPrice,
    size: product.size,
    imageUrl: product.imageUrl,
    color: product.color,
    feeAmount: product.feeAmount,
    isCheck: true,
  };

  const handleSelectColor = (color) => {
    setColorSelected({
      name: color.name,
      index: color.index,
    });
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
      const pro = getItem(product.id + sizeSelected.name + colorSelected.name);
      if (pro) {
        updateItemQuantity(pro.id, pro.quantity + qtyValue);
      } else {
        addItem(
          {
            ...productCart,
            size: sizeSelected.name,
            id: `${product.id}-${sizeSelected.name || ''}-${
              colorSelected.name || ''
            }`,
            productId: product.id,
          },
          qtyValue
        );
      }
      setQtyValue(1);
    }
  };
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
                {product.variation.colors?.slice(0, 2).map((color, idx) => (
                  <span key={idx}>
                    {color.name.slice(0, 5)}
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
                    {product.variation?.colors?.slice(0, 1).map((color, idx) =>
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
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={product.url ? product.url : ''}
          >
            <span className={styles.link}>
              <FaLink className={styles.linkIcon} />
            </span>
          </a> */}
        </span>
        <div
          className={clsx(styles.optionBox, {
            [styles.optionBoxActive]: isBuy,
          })}
        >
          {product.variation ? (
            <>
              {product.variation?.colors && (
                <>
                  <TypeBox
                    attKey={'Màu'}
                    select={colorSelected}
                    setSelect={handleSelectColor}
                    types={product.variation?.colors}
                  />
                  <TypeBox
                    attKey={'Size'}
                    select={sizeSelected}
                    setSelect={setSizeSelected}
                    types={
                      product.variation?.colors?.[colorSelected.index]?.sizes
                    }
                  />
                </>
              )}
              {product.variation?.sizes && (
                <>
                  {product.color && (
                    <TypeBox
                      attKey={'Màu'}
                      select={colorSelected}
                      setSelect={handleSelectColor}
                      types={[{ name: product.color }]}
                    />
                  )}
                  <TypeBox
                    attKey={'Size'}
                    select={sizeSelected}
                    setSelect={setSizeSelected}
                    types={product.variation?.sizes}
                  />
                </>
              )}
            </>
          ) : product.size ? (
            <>
              {product.color && (
                <TypeBox
                  attKey={'Màu'}
                  select={colorSelected}
                  setSelect={handleSelectColor}
                  types={[{ name: product.color }]}
                />
              )}
              {product.size && (
                <TypeBox
                  attKey={'Size'}
                  select={sizeSelected}
                  setSelect={setSizeSelected}
                  types={[{ name: product.size }]}
                />
              )}
            </>
          ) : product.color ? (
            <>
              {product.color && (
                <TypeBox
                  attKey={'Màu'}
                  select={colorSelected}
                  setSelect={handleSelectColor}
                  types={[{ name: product.color }]}
                />
              )}
              {product.size && (
                <TypeBox
                  attKey={'Size'}
                  select={sizeSelected}
                  setSelect={setSizeSelected}
                  types={[{ name: product.size }]}
                />
              )}
            </>
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
