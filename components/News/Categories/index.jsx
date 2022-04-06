import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Grid, Typography, CardMedia } from '@material-ui/core';
import BannerMain from '../Banner/Banner';
import ListsMenu from '../ListsMenu/ListMenu';
import styles from './Categories.module.scss';
import CardItem from './Card';
import { MdDownload } from 'react-icons/md';
import VideoCompany from '../Video/VideoCompany';
import { AiOutlineRight } from 'react-icons/ai';
import { Pagination } from '@material-ui/lab';
import DownLoadBox from '../Download';
const firstIndex = 0;

export const Categories = ({ articles }) => {
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(articles.slice(firstIndex, pageSize));
  useEffect(() => {
    setData(articles.slice(0, pageSize));
  }, [articles, pageSize]);
  const handleChange = (event, value) => {
    setPage(value);
    setData(
      articles.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };
  return (
    <>
      <div className={styles.container}>
        <BannerMain />
        <div className={styles.newsBar}>
          <Link href="/">Trang chủ</Link>
          <AiOutlineRight className={styles.arrowIcon} />
          <Link href="/tin-tuc">Tin tức</Link>
          <AiOutlineRight className={styles.arrowIcon} />
          <Link href="/tin-tuc/tin-tuc">Tin thị trường</Link>
        </div>
        <Grid container justifyContent="center" className={styles.categoryNews}>
          <Grid item lg={7} md={11} sm={10} xs={11}>
            <Typography variant="h5" className={styles.category}>
              Tin thị trường
            </Typography>
            <Grid container spacing={2}>
              {data.map((article, index) => (
                <Grid key={index} item md={4} sm={6} xs={12}>
                  <CardItem article={article} />
                </Grid>
              ))}
            </Grid>
            <div className={styles.pagination}>
              <Pagination
                color="primary"
                count={Math.ceil(articles.length / pageSize)}
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
                size="small"
              />
            </div>
          </Grid>
          <Grid item lg={3} md={11} sm={10} xs={11}>
            <div className={styles.rightBar}>
              <ListsMenu />
              <VideoCompany articles={articles.slice(0, 3)} />
              <DownLoadBox />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
