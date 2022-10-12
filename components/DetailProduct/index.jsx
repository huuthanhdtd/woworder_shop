import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import styles from './styles.module.scss';
import RelativeProduct from './RelativeProduct';
import { useCart } from 'react-use-cart';
import database from '../../constants/database.json';
import InformationBox from './InformationBox';
import Alerts from '../Alerts';

const DetailProduct = ({ product, productsViewed, products }) => {
  const router = useRouter();
  const { items } = database;
  const { addItem, updateItem, getItem } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const [sizeCode, setSizeCode] = React.useState();

  const [alertMsg, setAlertMsg] = React.useState({
    open: false,
    severity: 'success',
    message: 'Sản phẩm của bạn đã được thêm vào giỏ hàng',
  });

  const firstProductInfor = React.useMemo(() => {
    const arrColors = product?.variation?.colors && product.variation.colors;
    const color = arrColors
      ? arrColors[0].name
      : product?.color
      ? product?.color
      : null;
    let size;
    let arrSizes;
    if (product?.variation?.colors && product?.variation?.colors[0].sizes) {
      arrSizes = product.variation.colors[0].sizes;
      size = product.variation.colors[0].sizes[0].name;
    } else if (product?.variation?.sizes) {
      arrSizes = product.variation.sizes;
      size = product.variation.sizes[0].name;
    } else if (product?.size) {
      arrSizes = null;
      size = product.size;
    } else {
      arrSizes = null;

      size = null;
    }
    return {
      color,
      size,
      arrColors,
      arrSizes,
    };
  }, []);

  const [productInfor, setProductInfor] = React.useState({
    id: product.id,
    name: product.name,
    color: firstProductInfor?.color,
    imageUrl: product.imageUrl,
    size: firstProductInfor?.size,
    price: product.sellPrice,
  });
  const [alert, setAlert] = React.useState(false);
  // const [notify, setNotify] = React.useState(false);
  const cartItem = getItem(product.id + sizeCode?.size);

  const result = React.useMemo(() => {
    return products?.map((pro) => {
      const item = items.find((it) => it.id === pro.productId);
      if (item?.id === pro.productId) {
        return item;
      }
    });
  }, [products]);

  const handleInput = React.useCallback(
    (e, prop) => {
      if (e === 'down') {
        setQuantity((prev) => prev - 1);
      } else if (e === 'up') {
        setQuantity((prev) => prev + 1);
      }
    },
    [quantity]
  );

  const handleSize = React.useCallback(
    (value) => {
      setProductInfor((prev) => ({
        ...prev,
        size: value.size === productInfor.size ? '' : value.size,
      }));
      setAlert(false);
      setQuantity(1);
      setSizeCode(value);
    },
    [, productInfor.size, alert]
  );

  const handleAddCart = React.useCallback(
    (type) => {
      if (!cartItem || cartItem.size !== productInfor?.size) {
        addItem(
          {
            ...productInfor,
            id: productInfor?.id + sizeCode?.size,
          },
          quantity
        );
      }
      if (cartItem) {
        updateItem(productInfor.id + sizeCode?.size, {
          quantity: quantity + cartItem.quantity,
        });
      }
      // type === 'add' && setNotify(true);
      type === 'add' &&
        setAlertMsg({
          open: true,
          severity: 'success',
          message: 'Sản phẩm của bạn đã được thêm vào giỏ hàng',
        });

      type === 'buy' && router.push('/cart');
    },
    [productInfor.size, cartItem, quantity]
  );

  return (
    <div className={styles.root}>
      {/* {notify && (
        <div className={styles.wrapNotify} onClick={() => setNotify(false)}>
          <div className={styles.notify}>
            <BsFillCheckCircleFill className={styles.iconCheck} />
            <Typography variant="body2">
              Sản phẩm của bạn đã được thêm vào giỏ hàng
            </Typography>
          </div>
        </div>
      )} */}
      <InformationBox
        alert={alert}
        product={product}
        handleSize={handleSize}
        handleInput={handleInput}
        quantity={quantity}
        handleAddCart={handleAddCart}
        productInfor={productInfor}
        setProductInfor={setProductInfor}
        firstProductInfor={firstProductInfor}
      />
      <Grid container justifyContent="center" className={styles.detail}>
        <Grid item lg={11}>
          <Typography variant="h5">Chi tiết sản phẩm</Typography>
        </Grid>
      </Grid>

      <RelativeProduct title={'SẢN PHẨM LIÊN QUAN'} products={result} />

      <RelativeProduct title={'SẢN PHẨM ĐÃ XEM'} products={productsViewed} />
      <Alerts state={alertMsg} setState={setAlertMsg} />
    </div>
  );
};

export default DetailProduct;
