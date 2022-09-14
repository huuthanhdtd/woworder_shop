import React from 'react';
import styles from './styles.module.scss';
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiFillFire } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';
import {
  Button,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { colorAndType } from '../../constants/commonData';
import { useCallback } from 'react';
const DetailProduct = () => {
  const router = useRouter();
  const [input, setInput] = React.useState(1);
  const handleInput = useCallback(
    (e) => {
      if (e === 'down') {
        setInput((prev) => prev - 1);
      } else if (e === 'up') {
        setInput((prev) => prev + 1);
      }
    },
    [input]
  );
  console.log(input);
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
              <Button onClick={() => handleInput('down')}>-</Button>
              <TextField
                variant="outlined"
                className={styles.input}
                size="small"
                value={input}
                defaultValue={1}
                type="number"
                hiddenLabel={true}
              />
              <Button onClick={() => handleInput('up')}>+</Button>
            </div>
            <Typography variant="body2">sản phẩm có sẵn</Typography>
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
          <Typography variant="body1">Chia sẻ:</Typography>
        </Grid>
      </Grid>
      <div className={styles.detail}>detail</div>
    </div>
  );
};

export default DetailProduct;
