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
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsCartPlus, BsFacebook } from 'react-icons/bs';
import { colorAndType } from '../../constants/commonData';
import styles from './styles.module.scss';
import Image from 'next/image';
import Hot from '../../assets//image/hot.svg';
import Label from '../../assets/image/label2.svg';
import Messenger from '../../assets/image/messenger.svg';
import clsx from 'clsx';
import RelativeProduct from './RelativeProduct';

const DetailProduct = () => {
  const router = useRouter();
  const [productInfor, setProductInfor] = React.useState({
    name: 'Jacket Jean',
    color: 'Dusty rose/unicorns',
    size: '',
    qty: 1,
  });

  const handleInput = React.useCallback(
    (e, prop) => {
      if (e === 'down') {
        setProductInfor((prev) => ({ ...prev, [prop]: prev.qty - 1 }));
      } else if (e === 'up') {
        setProductInfor((prev) => ({ ...prev, [prop]: prev.qty + 1 }));
      }
    },
    [productInfor.qty]
  );

  const handleSize = React.useCallback(
    (value) => {
      setProductInfor((prev) => ({ ...prev, size: value }));
    },
    [, productInfor.size]
  );

  const handleAddCart = React.useCallback(() => {
    if (productInfor.size && productInfor.qty !== '') {
      console.log('add to store');
    }
  }, [productInfor.size, productInfor.qty]);
  return (
    <div className={styles.root}>
      <Grid container className={styles.selectModel} justifyContent="center">
        <Grid item lg={4}>
          <CardMedia
            className={styles.image}
            image="https://img5.thuthuatphanmem.vn/uploads/2021/11/22/hinh-anh-songoku-cap-cuoi-dep_101021714.png"
          />
        </Grid>
        <Grid item lg={6}>
          <div className={styles.title}>
            <div className={styles.hot}>
              <Image src={Hot} width={39.75} height={53} />
            </div>
            <Typography variant="h6">
              Blackmores Celery 3000 Mild Ache Relief 50 Tablets
            </Typography>
          </div>
          <div className={styles.price}>
            {/* <Typography variant="h6">
              350.000<span>đ</span>
            </Typography> */}
            <Typography variant="h5">
              190.000<small> đ</small>
            </Typography>
            <div className={styles.label}>
              <Image src={Label} />
              <Typography variant="body2">Giảm 40%</Typography>
            </div>
          </div>
          <div className={styles.colorsAndType}>
            <Typography variant="body2" className={styles.prop}>
              {colorAndType[0].name}:
            </Typography>
            {colorAndType[0].data.map((att, idx) => (
              <Typography key={idx} variant="body2">
                {att.attr}
                {idx + 1 === colorAndType[0].data.length ? '' : '/'}
              </Typography>
            ))}
          </div>
          <div className={styles.colorsAndType}>
            <Typography variant="body2" className={styles.prop}>
              {colorAndType[1].name}:
            </Typography>
            {colorAndType[1].data.map((att, idx) => (
              <Button
                key={idx}
                className={clsx(styles.color, {
                  [styles.active]: productInfor.size === att.attr,
                })}
                onClick={() => handleSize(att.attr)}
              >
                {att.attr}
              </Button>
            ))}
          </div>
          <div className={styles.amount}>
            <Typography variant="body2" className={styles.prop}>
              Số lượng:
            </Typography>
            <div className={styles.inputBox}>
              <form action="" autoComplete="off">
                <Button
                  onClick={() => handleInput('down', 'qty')}
                  disabled={productInfor.qty === 1 ? true : false}
                >
                  -
                </Button>
                <TextField
                  variant="outlined"
                  className={styles.input}
                  size="small"
                  value={productInfor.qty}
                  type="number"
                />
                <Button onClick={() => handleInput('up', 'qty')}>+</Button>
              </form>
            </div>
            <Typography variant="body2">25 sản phẩm có sẵn</Typography>
          </div>
          <div className={styles.actions}>
            <Button className={styles.addCart} onClick={handleAddCart}>
              <BsCartPlus size={20} style={{ marginRight: 2 }} />
              Thêm vào giỏ hàng
            </Button>
            <Button className={styles.buyNow}>Mua ngay</Button>
          </div>
        </Grid>
        <Grid item lg={11} className={styles.share}>
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
      <Grid container justifyContent="center" className={styles.relative}>
        <Grid item lg={11}>
          <RelativeProduct title={'SẢN PHẨM LIÊN QUAN'} />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={styles.relative}>
        <Grid item lg={11}>
          <RelativeProduct title={'SẢN PHẨM ĐÃ XEM'} />
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(DetailProduct);
