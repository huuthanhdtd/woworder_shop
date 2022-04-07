import React, { useContext } from 'react';
import Link from 'next/link';
import CardItem from './Card';
import styles from './NewsPage.module.scss';
import { Button, CardMedia, Grid, Typography } from '@material-ui/core';
import { ArrowForwardIos, ArrowRight } from '@material-ui/icons';
import { BsCaretRightFill, BsStopwatch } from 'react-icons/bs';
import { AiOutlineRight } from 'react-icons/ai';
import { MdDownload } from 'react-icons/md';

import VideoCompany from './Video/VideoCompany';
import ListNews from './ListNews/ListNews';
import ListsMenu from './ListsMenu/ListMenu';
import DownLoadBox from './Download';

const NewsPage = ({ articles, title }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.newsBar}>
          <Link href="/">Trang chủ</Link>
          <AiOutlineRight className={styles.arrowIcon} />
          <Link href="/tin-tuc">{title}</Link>
        </div>

        <Grid
          className={styles.containerNews}
          container
          justifyContent="center"
        >
          <Grid
            item
            lg={7}
            md={8}
            sm={11}
            xs={11}
            className={styles.contentNews}
          >
            <div className={styles.boardNews}>
              <Typography className={styles.nameCategory} variant="h5">
                <Link href="/tin-tuc/tin-tuc">Tin tức thị trường</Link>
              </Typography>
              <Grid container spacing={1} justifyContent="center">
                <Grid item md={7} sm={7} xs={12}>
                  {articles.slice(0, 1).map((article, index) => (
                    <CardItem key={article.id} article={article} />
                  ))}
                </Grid>
                <Grid item md={5} sm={5} xs={12} className={styles.listNews}>
                  {articles.slice(1, 4).map((article, index) => (
                    <ListNews key={article.id} article={article} />
                  ))}
                  <Button>
                    <Link href="/tin-tuc/tin-tuc">Xem thêm</Link>
                    <BsCaretRightFill />
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div className={styles.boardNews}>
              <Typography className={styles.nameCategory} variant="h5">
                <Link href="/tin-tuc/tin-tuc">Tin Dự án</Link>
              </Typography>
              <Grid container spacing={1} justifyContent="center">
                <Grid item md={7} sm={7} xs={12}>
                  {articles.slice(0, 1).map((article, index) => (
                    <CardItem key={article.id} article={article} />
                  ))}
                </Grid>
                <Grid item md={5} sm={5} xs={12} className={styles.listNews}>
                  {articles.slice(1, 4).map((article, index) => (
                    <ListNews key={article.id} article={article} />
                  ))}
                  <Button>
                    <Link href="/tin-tuc/tuyen-dung">Xem thêm</Link>
                    <BsCaretRightFill />
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={11} xs={11} className={styles.rightBar}>
            <Grid container spacing={1} className={styles.content}>
              <Grid item md={12} sm={12} xs={12}>
                <ListsMenu />
              </Grid>
              <Grid item md={12} sm={6} xs={12}>
                <VideoCompany articles={articles.slice(0, 3)} />
              </Grid>
              <Grid item md={12} sm={6} xs={12}>
                <DownLoadBox />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default NewsPage;
