import React from 'react';
import styles from './styles.module.scss';
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiFillFire } from 'react-icons/ai';
import { BsCartPlus, BsFacebook } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import {
  Button,
  CardMedia,
  Grid,
  TextField,
  Typography,
  Link,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { colorAndType } from '../../constants/commonData';
import Image from 'next/image';
// import Link from 'next/link';

const DetailProduct = () => {
  const router = useRouter();
  const [productInfor, setProductInfor] = React.useState({
    name: '',
    color: '',
    size: '',
    nums: 1,
  });
  const handleInput = React.useCallback(
    (e, prop) => {
      if (e === 'down') {
        setProductInfor((prev) => ({ ...prev, [prop]: prev.nums - 1 }));
      } else if (e === 'up') {
        setProductInfor((prev) => ({ ...prev, [prop]: prev.nums + 1 }));
      }
    },
    [productInfor.nums]
  );

  const handleColorAndType = React.useCallback(
    (type, value) => {
      setProductInfor((prev) => ({ ...prev, [type]: value }));
    },
    [productInfor.color, productInfor.size]
  );

  return (
    <div className={styles.root}>
      <TiArrowBackOutline
        size={40}
        color="black"
        onClick={() => router.push('/')}
      />
      <Grid container className={styles.selectModel} justifyContent="center">
        <Grid item lg={4}>
          <CardMedia
            className={styles.image}
            image="https://img5.thuthuatphanmem.vn/uploads/2021/11/22/hinh-anh-songoku-cap-cuoi-dep_101021714.png"
          />
        </Grid>
        <Grid item lg={6}>
          <div className={styles.title}>
            <Typography variant="body1">
              <AiFillFire color="#EF4444" size={50} />
              Blackmores Celery 3000 Mild Ache Relief 50 Tablets
            </Typography>
          </div>
          <div className={styles.price}>
            <Typography variant="h6">
              350.000<span>đ</span>
            </Typography>
            <Typography variant="h5">
              190.000<span>đ</span>
            </Typography>
            <Typography variant="body2">Giảm 40%</Typography>
          </div>
          {colorAndType.map((data, idx) => (
            <div key={idx} className={styles.colorsAndType}>
              <Typography variant="body2" className={styles.prop}>
                {data.name}:
              </Typography>
              {data.data.map((att, idx) => (
                <Button key={idx}> {att.attr}</Button>
              ))}
            </div>
          ))}
          <div className={styles.amount}>
            <Typography variant="body2" className={styles.prop}>
              Số lượng:
            </Typography>
            <div className={styles.inputBox}>
              <form action="" autoComplete="off">
                <Button
                  onClick={() => handleInput('down', 'nums')}
                  disabled={productInfor.nums === 1 ? true : false}
                >
                  -
                </Button>
                <TextField
                  variant="outlined"
                  className={styles.input}
                  size="small"
                  value={productInfor.nums}
                  type="number"
                />
                <Button onClick={() => handleInput('up', 'nums')}>+</Button>
              </form>
            </div>
            <Typography variant="body2">25 sản phẩm có sẵn</Typography>
          </div>
          <div className={styles.actions}>
            <Button className={styles.addCart}>
              <BsCartPlus />
              Thêm vào giỏ hàng
            </Button>
            <Button className={styles.buyNow}>Mua ngay</Button>
          </div>
        </Grid>
        <Grid item lg={11} className={styles.share}>
          <Typography variant="body2">Chia sẻ:</Typography>
          <div className={styles.icons}>
            <Link href={'/'}>
              <Image src={'/messenger.svg'} width={30} height={30} />
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
    </div>
  );
};

export default React.memo(DetailProduct);
