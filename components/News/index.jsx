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

const NewsPage = ({ articles, title }) => {
  return (
    <>
      <div className={styles.newsPage}>
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
          <Grid item md={7} sm={11} xs={12} className={styles.contentNews}>
            <div className={styles.boardNews}>
              <Typography className={styles.nameCategory} variant="h5">
                <Link href="/tin-tuc/tin-du-an">Tin tức thị trường</Link>
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                <Grid item md={7} sm={6} xs={12}>
                  {articles.slice(0, 1).map((article, index) => (
                    <CardItem key={article.id} article={article} />
                  ))}
                </Grid>
                <Grid item md={5} sm={6} xs={12} className={styles.listNews}>
                  {articles.slice(1, 4).map((article, index) => (
                    <ListNews key={article.id} article={article} />
                  ))}
                  <Button style={{ marginBottom: 30 }}>
                    <Link href="/tin-tuc/tin-tuc">Xem thêm</Link>
                    <BsCaretRightFill />
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div className={styles.boardNews}>
              <Typography className={styles.nameCategory} variant="h5">
                <Link href="/tin-tuc/tin-du-an">Tin Dự án</Link>
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                <Grid item md={7} sm={6} xs={12}>
                  {articles.slice(0, 1).map((article, index) => (
                    <CardItem key={article.id} article={article} />
                  ))}
                </Grid>
                <Grid item md={5} sm={6} xs={12} className={styles.listNews}>
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
          <Grid item md={3} sm={11} xs={12} className={styles.rightBar}>
            <Grid container spacing={2} className={styles.content}>
              <Grid item md={12} sm={12} xs={12}>
                <ListsMenu />
              </Grid>
              <Grid item md={12} sm={6} xs={12}>
                <VideoCompany articles={articles.slice(0, 3)} />
              </Grid>
              <Grid item md={12} sm={6} xs={12}>
                <CardMedia
                  style={{
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto',
                    height: 300,
                    padding: 18,
                  }}
                  image="https://www.novaland.com.vn/Data/Sites/1/skins/default/images/brochure-bg.png"
                >
                  <h2 style={{ color: 'var(--primary-color-)' }}>
                    Brochure Công ty
                  </h2>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '50% auto',
                    }}
                  >
                    <div
                      className={styles.brochureIcon}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <MdDownload
                        style={{
                          fontSize: 120,
                          color: 'white',
                          background: 'var(--hover-color-)',
                          borderRadius: 10,
                        }}
                      />
                      <a href="#" style={{ color: 'var(--primary-color-)' }}>
                        Tải Brochure
                      </a>
                    </div>
                    <span className={styles.content}>
                      <p>
                        Download Bruchure mới nhất của Novaland để hiểu rõ hơn
                        về chứng tôi
                      </p>
                    </span>
                  </div>
                </CardMedia>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default NewsPage;
