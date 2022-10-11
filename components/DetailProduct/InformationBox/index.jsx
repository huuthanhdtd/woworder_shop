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

const InformationBox = ({
  alert,
  product,
  handleSize,
  handleInput,
  quantity,
  handleAddCart,
  productInfor,
}) => {
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
        <div className={styles.colorsAndType}>
          <Typography variant="body2" className={styles.prop}>
            Màu:
          </Typography>
          <Typography variant="body2" className={styles.color}>
            {product.color ? product.color : 'Không có màu'}
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
            <small className={styles.color}>Không có kích thước</small>
          )}
        </div>
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
  );
};

export default InformationBox;
