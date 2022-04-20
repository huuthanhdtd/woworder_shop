import React, { useEffect, useState } from 'react';
import styles from './Banner.module.scss';
import { div, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import { autoCount } from '../../lib/Count';

function Banner({ getImage }) {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const [countFour, setCountFour] = useState(0);
  const [countFive, setCountFive] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      //Budget Land
      autoCount(795, 6, 1, setCountOne);
      //Products
      autoCount(50, 100, 1, setCountTwo);
      //Projects
      autoCount(50, 100, 1, setCountThree);
      //Provinces
      autoCount(9, 400, 1, setCountFour);
      //Customers
      autoCount(40, 90, 1, setCountFive);
    }, 500);
  }, []);
  return (
    <>
      <CardMedia className={styles.image} image="/Banner/banner.jpg">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={styles.container}
        >
          <Grid item sm={6} xs={12} className={styles.content}>
            <Typography variant="caption">
              Các dự án của Tập đoàn Ân Phú
            </Typography>
            <Typography variant="h4">Đa dạng tại nhiều tỉnh thành</Typography>
            <Typography variant="body2">
              Năng lực của Tập đoàn Ân Phú đã được chứng minh qua các sản phẩm
              và dịch vụ chất lượng chuẩn mực. Tập đoàn ngày càng khẳng định
              được vị thế trong lĩnh vực bất động sản và đang vững bước tiến vào
              kỷ nguyên mới với các dự án được đầu tư bài bản từ khâu nghiên cứu
              nhu cầu, phát triển ý tưởng, triển khai cùng các đối tác tư vấn
              quốc tế hàng đầu.
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12} className={styles.detail}>
            <div className={styles.left}>
              <div className={styles.item}>
                <Typography variant="h3">{countOne}ha</Typography>
                <Typography variant="body2">Quỹ đất</Typography>
                <Divider className={styles.divider} />
              </div>
              <div className={styles.item}>
                <Typography variant="h3">{countTwo}.000</Typography>
                <Typography variant="body2">Đơn vị sản phẩm</Typography>
                <Divider className={styles.divider} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.item}>
                <Typography variant="h3">{countThree}</Typography>
                <Typography variant="body2">Dự án đã triển khai</Typography>
                <Divider className={styles.divider} />
              </div>
              <div className={styles.item}>
                <Typography variant="h3">{countFour}</Typography>
                <Typography variant="body2">Tỉnh thành</Typography>
                <Divider className={styles.divider} />
              </div>
              <div className={styles.item}>
                <Typography variant="h3">{countFive}.000</Typography>
                <Typography variant="body2">Khách hàng đã phục vụ</Typography>
                <Divider className={styles.divider} />
              </div>
            </div>
          </Grid>
        </Grid>
      </CardMedia>
    </>
  );
}

export default Banner;
