import React, { useEffect, useState } from 'react';
import styles from './Banner.module.scss';
import { div, CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import { autoCount } from '../../lib/Count';
import { getMediaFollowSize, getStrapiMedia } from '../../lib/media';

function Banner({
  bannerRef,
  focusBanner,
  project,
  changeBanner,
  bannerProject,
}) {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);
  const [countFour, setCountFour] = useState(0);
  const [countFive, setCountFive] = useState(0);
  const [countSix, setCountSix] = useState(0);
  const [countSeven, setCountSeven] = useState(0);
  const [countEight, setCountEight] = useState(0);
  const [countNine, setCountNine] = useState(0);
  const [countTen, setCountTen] = useState(0);

  useEffect(() => {
    if (focusBanner) {
      setTimeout(() => {
        //Budget Land
        autoCount(bannerProject.attributes.acreage, 2, 8, setCountOne);
        //Products
        autoCount(bannerProject.attributes.product, 1, 33, setCountTwo);
        //Projects
        autoCount(bannerProject.attributes.Project, 100, 1, setCountThree);
        //Provinces
        autoCount(bannerProject.attributes.province, 400, 1, setCountFour);
        //Customers
        autoCount(bannerProject.attributes.customer, 1, 15, setCountFive);
        if (project) {
          //Rest product
          autoCount(
            project.attributes.total_product - project.attributes.products_sold,
            100,
            1,
            setCountSix
          );
          //Area
          autoCount(project.attributes.acreage, 200, 1, setCountSeven);
          //Customer Detail Project
          autoCount(project.attributes.customer, 50, 1, setCountEight);
          //Products Sold Detail Project
          autoCount(project.attributes.products_sold, 5, 1, setCountNine);
          //Total Products Detail Project
          autoCount(project.attributes.total_product, 5, 1, setCountTen);
        }
      }, 500);
    } else {
      setCountOne(0);
      setCountTwo(0);
      setCountThree(0);
      setCountFour(0);
      setCountFive(0);
      setCountSix(0);
      setCountSeven(0);
      setCountEight(0);
      setCountNine(0);
      setCountTen(0);
    }
  }, [focusBanner]);
  return (
    <>
      <CardMedia
        className={styles.image}
        image={
          changeBanner
            ? getMediaFollowSize(
                project.attributes.image.data.attributes.formats.large
              )
            : getStrapiMedia(bannerProject.attributes.background)
        }
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
                <Typography variant="h3">
                  {changeBanner ? `${countSeven} ha` : `${countOne} ha`}
                </Typography>
                <Typography variant="body2">
                  {changeBanner ? 'Diện tích' : 'Quỹ đất'}
                </Typography>
                <Divider className={styles.divider} />
              </div>
              <div className={styles.item}>
                <Typography variant="h3">
                  {changeBanner ? countEight : countTwo}
                </Typography>
                <Typography variant="body2">
                  {changeBanner ? 'Khách hàng phục vụ' : 'Đơn vị sản phẩm'}
                </Typography>
                <Divider className={styles.divider} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.item}>
                <Typography variant="h3">
                  {changeBanner ? countTen : countThree}
                </Typography>
                <Typography variant="body2">
                  {changeBanner ? 'Tổng sản phẩm' : 'Dự án đã triển khai'}
                </Typography>
                <Divider className={styles.divider} />
              </div>
              <div className={styles.item}>
                <Typography variant="h3">
                  {changeBanner ? countNine : countFour}
                </Typography>
                <Typography variant="body2">
                  {changeBanner ? 'Sản phẩm đã bán' : 'Tỉnh thành'}
                </Typography>
                <Divider className={styles.divider} />
              </div>
              <div className={styles.item}>
                <Typography variant="h3">
                  {changeBanner ? countSix : `${countFive}`}
                </Typography>
                <Typography variant="body2">
                  {changeBanner ? 'Sản phẩm còn lại' : 'Khánh hàng phục vụ'}
                </Typography>
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
