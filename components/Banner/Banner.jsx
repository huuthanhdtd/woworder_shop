import React, { useEffect, useState } from 'react';
import styles from './Banner.module.scss';
import { div, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import { autoCount } from '../../lib/Count';

function Banner({ bannerRef, focusBanner, project, changeBanner }) {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const [countFour, setCountFour] = useState(0);
  const [countFive, setCountFive] = useState(0);

  useEffect(() => {
    if (focusBanner) {
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
        autoCount(41, 90, 1, setCountFive);
      }, 500);
    } else {
      setCountOne(0);
      setCountTwo(0);
      setCountThree(0);
      setCountFour(0);
      setCountFive(0);
    }
  }, [focusBanner]);
  return (
    <>
      <CardMedia
        className={styles.image}
        image={changeBanner ? '/Banner/detail.jpg' : '/Banner/banner.jpg'}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={styles.container}
          ref={bannerRef}
        >
          <Grid item sm={6} xs={12} className={styles.content}>
            <Typography variant="caption">
              Các dự án của Tập đoàn Ân Phú
            </Typography>
            <Typography variant="h4">
              {project
                ? `${project.attributes.title}`
                : 'Đa dạng tại nhiều tỉnh thành'}
            </Typography>
            <Typography variant="body2">
              {project
                ? `${project.attributes.description}`
                : `Năng lực của Tập đoàn Ân Phú đã được chứng minh qua các sản phẩm
              và dịch vụ chất lượng chuẩn mực. Tập đoàn ngày càng khẳng định
              được vị thế trong lĩnh vực bất động sản và đang vững bước tiến vào
              kỷ nguyên mới với các dự án được đầu tư bài bản từ khâu nghiên cứu
              nhu cầu, phát triển ý tưởng, triển khai cùng các đối tác tư vấn
              quốc tế hàng đầu.`}
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12} className={styles.detail}>
            <div className={styles.left}>
              <div className={styles.item}>
                <Typography variant="h3">{countOne}ha</Typography>
                <Typography variant="body2">Diện tích</Typography>
                <Divider className={styles.divider} />
              </div>
              <div className={styles.item}>
                <Typography variant="h3">{countTwo}.000</Typography>
                <Typography variant="body2">Khách hàng phục vụ</Typography>
                <Divider className={styles.divider} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.item}>
                <Typography variant="h3">{countThree}</Typography>
                <Typography variant="body2">Tổng sản phẩm</Typography>
                <Divider className={styles.divider} />
              </div>
              <div className={styles.item}>
                <Typography variant="h3">{countFour}</Typography>
                <Typography variant="body2">Sản phẩm đã bán</Typography>
                <Divider className={styles.divider} />
              </div>
              <div className={styles.item}>
                <Typography variant="h3">{countFive}</Typography>
                <Typography variant="body2">Sản phẩm còn lại</Typography>
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
