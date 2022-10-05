import React from 'react';
import {
  Button,
  CardMedia,
  Grid,
  TextField,
  Typography,
  Link,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { BiLink } from 'react-icons/bi';
import { BsCartPlus, BsFacebook, BsFillCheckCircleFill } from 'react-icons/bs';
import styles from './styles.module.scss';
import Image from 'next/image';
import Hot from '../../assets//image/hot.svg';
import Label from '../../assets/image/label2.svg';
import Messenger from '../../assets/image/messenger.svg';
import clsx from 'clsx';
import RelativeProduct from './RelativeProduct';
import { useCart } from 'react-use-cart';
import { convertCurrency } from '../../utils/convertCurrency';
import { upperFirstLetter } from '../../utils/styleText';

const DetailProduct = ({ product }) => {
  const router = useRouter();
  const { addItem, updateItem, getItem } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const [sizeCode, setSizeCode] = React.useState();
  const [productInfor, setProductInfor] = React.useState({
    id: product.id,
    name: product.name,
    color: product.color,
    imageUrl: product.imageUrl,
    size: '',
    price: product.sellPrice,
  });
  const [alert, setAlert] = React.useState(false);
  const [notify, setNotify] = React.useState(false);
  const cartItem = getItem(product.id + sizeCode?.size);

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
      if (productInfor.size !== '') {
        if (!cartItem || cartItem.size !== productInfor.size) {
          addItem(
            { ...productInfor, id: productInfor.id + sizeCode.size },
            quantity
          );
        }
        if (cartItem) {
          updateItem(productInfor.id + sizeCode.size, {
            quantity: quantity + cartItem.quantity,
          });
        }
        type === 'add' && setNotify(true);
        type === 'buy' && router.push('/cart');
      } else {
        setAlert(true);
      }
    },
    [productInfor.size, cartItem, quantity]
  );
  return (
    <div className={styles.root}>
      {notify && (
        <div className={styles.wrapNotify} onClick={() => setNotify(false)}>
          <div className={styles.notify}>
            <BsFillCheckCircleFill className={styles.iconCheck} />
            <Typography variant="body2">
              Sản phẩm của bạn đã được thêm vào giỏ hàng
            </Typography>
          </div>
        </div>
      )}
      <Grid container className={styles.selectModel} justifyContent="center">
        <Grid item lg={4} md={9} sm={9} xs={11}>
          <CardMedia className={styles.image} image={product.imageUrl} />
        </Grid>
        <Grid item lg={6} md={9} sm={9} xs={11}>
          <div className={styles.title}>
            <div className={styles.hot}>
              <Image src={Hot} width={39.75} height={53} />
            </div>
            <Typography variant="h6">
              {upperFirstLetter(product.name.toLowerCase())}
            </Typography>
          </div>
          <div className={styles.price}>
            {/* <Typography variant="h6">
              350.000<span>đ</span>
            </Typography> */}
            <Typography variant="h5">
              {convertCurrency(product.sellPrice)}
            </Typography>
            <div className={styles.label}>
              <Image src={Label} />
              <Typography variant="body2">Giảm 40%</Typography>
            </div>
          </div>
          <div className={styles.colorsAndType}>
            <Typography variant="body2" className={styles.prop}>
              Màu:
            </Typography>
            <Typography variant="body2" className={styles.color}>
              {product.color}
            </Typography>
          </div>
          <div className={styles.colorsAndType}>
            <Typography variant="body2" className={styles.prop}>
              Size:
            </Typography>
            {product.variation ? (
              product.variation.sizes.map((att, idx) => (
                <Button
                  key={idx}
                  className={clsx(styles.size, {
                    [styles.active]: productInfor.size === att.size,
                  })}
                  onClick={() => handleSize(att)}
                >
                  {att.name}
                </Button>
              ))
            ) : product.size ? (
              <Button
                className={clsx(styles.size, {
                  [styles.active]: productInfor.size === product.size,
                })}
                onClick={() => handleSize(product)}
              >
                {product.size}
              </Button>
            ) : (
              ''
            )}
          </div>
          <div className={styles.amount}>
            <Typography variant="body2" className={styles.prop}>
              Số lượng:
            </Typography>
            <div className={styles.inputBox}>
              <form action="" autoComplete="off">
                <Button
                  onClick={() => {
                    handleInput('down');
                  }}
                  disabled={quantity === 1 ? true : false}
                >
                  -
                </Button>
                <TextField
                  variant="outlined"
                  className={styles.input}
                  size="small"
                  value={quantity}
                  type="number"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <Button
                  onClick={() => {
                    handleInput('up');
                  }}
                >
                  +
                </Button>
              </form>
            </div>
            <Typography variant="body2" className={styles.description}>
              25 sản phẩm có sẵn
            </Typography>
          </div>
          <div className={styles.actions}>
            <Button
              className={styles.addCart}
              onClick={() => handleAddCart('add')}
            >
              <BsCartPlus size={20} style={{ marginRight: 2 }} />
              Thêm vào giỏ hàng
            </Button>
            <Button
              className={styles.buyNow}
              onClick={() => handleAddCart('buy')}
            >
              Mua ngay
            </Button>
            {alert && (
              <Typography variant="body2" className={styles.alert}>
                Vui lòng chọn size cho sản phẩm
              </Typography>
            )}
          </div>
        </Grid>
        <Grid item lg={11} md={9} sm={9} xs={11} className={styles.share}>
          <Typography variant="body2">Chia sẻ:</Typography>
          <div className={styles.icons}>
            <Link href={'/'}>
              <Image src={Messenger} width={30} height={30} />
            </Link>
            <Link href={'/'}>
              <BsFacebook size={25} color="#2563EB" />
            </Link>
            <Link href={'/'}>
              <BiLink className={styles.iconLink} />
            </Link>
          </div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={styles.detail}>
        <Grid item lg={11}>
          <Typography variant="h5">Chi tiết sản phẩm</Typography>
        </Grid>
      </Grid>

      <RelativeProduct title={'SẢN PHẨM LIÊN QUAN'} />

      <RelativeProduct title={'SẢN PHẨM ĐÃ XEM'} />
    </div>
  );
};

export default DetailProduct;
