import {
  Button,
  CardMedia,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import { BiLink } from 'react-icons/bi';
import { BsCartPlus, BsFacebook } from 'react-icons/bs';
import { convertCurrency } from '../../../utils/convertCurrency';
import { upperFirstLetter } from '../../../utils/styleText';
import Messenger from '../../../assets/image/messenger.svg';
import Label from '../../../assets/image/label2.svg';
import Hot from '../../../assets//image/hot.svg';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Alerts from '../../Alerts';
import { useEffect } from 'react';

const InformationBox = ({
  alert,
  product,
  handleSize,
  handleInput,
  quantity,
  handleAddCart,
  productInfor,
  setProductInfor,
  firstProductInfor,
}) => {
  const [colorActive, setColorActive] = React.useState(
    product?.variation?.colors && product?.variation?.colors[0]
  );
  const [sizeActive, setSizeActive] = React.useState();

  useEffect(() => {
    if (product?.variation?.colors) {
      setColorActive(product?.variation?.colors[0]);
      setSizeActive(product?.variation?.colors[0].sizes[0]);
    } else if (product?.color) {
      setColorActive(product?.color);
    } else {
      setColorActive(null);
    }
  }, []);
  const handleChangeColor = (color) => {
    setColorActive(color);
    setProductInfor((prev) => {
      return {
        ...prev,
        color: color.name,
      };
    });
  };
  const handleChangeSize = (value) => {
    if (value.size !== productInfor.size) {
      setProductInfor((prev) => {
        return {
          ...prev,
          size: value.size,
        };
      });
      handleSize(value);
    }
    console.log(productInfor);
  };
  return (
    <Grid container className={styles.selectModel} justifyContent="center">
      <Grid item lg={4} md={4} sm={9} xs={11} className={styles.boxImage}>
        <CardMedia className={styles.image} image={product.imageUrl} />
      </Grid>
      <Grid item lg={6} md={6} sm={9} xs={11}>
        <div className={styles.title}>
          <div className={styles.hot}>
            <Image src={Hot} width={39.75} height={53} />
          </div>
          <Typography variant="h6">
            {upperFirstLetter(product.name.toLowerCase())}
          </Typography>
        </div>
        <div className={styles.price}>
          <Typography variant="h5">
            {convertCurrency(product.sellPrice)}
          </Typography>
          <div className={styles.label}>
            <Image src={Label} />
            <Typography variant="body2">Giảm 40%</Typography>
          </div>
        </div>
        {productInfor?.color && (
          <div className={styles.colorsAndType}>
            <Typography variant="body2" className={styles.prop}>
              Màu:
            </Typography>
            {product?.variation?.colors ? (
              product?.variation?.colors.map((item) => (
                <span
                  onClick={() => handleChangeColor(item)}
                  key={item.colorId}
                  className={clsx(styles.colorsItem, {
                    [styles.colorsItemActive]: productInfor.color === item.name,
                  })}
                >
                  {item.name}
                </span>
              ))
            ) : product?.color ? (
              <span
                className={clsx(styles.colorsItem, styles.colorsItemActive)}
              >
                {product?.color}
              </span>
            ) : (
              <Typography variant="body2" className={styles.color}>
                {'Không có màu'}
              </Typography>
            )}
          </div>
        )}

        {productInfor?.size && (
          <div className={styles.colorsAndType}>
            <Typography variant="body2" className={styles.prop}>
              Size:
            </Typography>
            {colorActive?.sizes ? (
              colorActive.sizes.map((att, idx) => (
                <Button
                  key={idx}
                  className={clsx(styles.size, {
                    [styles.active]: productInfor.size === att.size,
                  })}
                  onClick={() => handleChangeSize(att)}
                >
                  {att.name}
                </Button>
              ))
            ) : product?.variation?.sizes ? (
              product.variation?.sizes.map((item) => (
                <Button
                  key={item.name}
                  className={clsx(styles.size, {
                    [styles.active]: productInfor.size === product.size,
                  })}
                  onClick={() => handleChangeSize(item)}
                >
                  {item.name}
                </Button>
              ))
            ) : product?.size ? (
              <Button className={clsx(styles.size, styles.active)}>
                {product?.size}
              </Button>
            ) : (
              <small className={styles.color}>Không có kích thước</small>
            )}
          </div>
        )}
        <div className={styles.amount}>
          <div className={styles.wrapInput}>
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
          </div>
          <small className={styles.description}>25 sản phẩm có sẵn</small>
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

          {/* {alert && (
            <Typography variant="body2" className={styles.alert}>
              Vui lòng chọn size cho sản phẩm
            </Typography>
          )} */}
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
  );
};

export default InformationBox;
