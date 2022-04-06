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
    <div className={styles.marketNews}>
      <BannerMain />
      <div className={styles.newsBar}>
        <Link href="/">Trang chủ</Link>
        <AiOutlineRight className={styles.arrowIcon} />
        <Link href="/tin-tuc">Tin tức</Link>
        <AiOutlineRight className={styles.arrowIcon} />
        <Link href="/tin-tuc/tin-tuc">Tin thị trường</Link>
      </div>
      <Grid
        container
        justifyContent="center"
        className={styles.containerMarketNews}
      >
        <Grid item lg={10} sm={10} xs={12}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item lg={9} sm={12} xs={12}>
              <Typography variant="h5" className={styles.category}>
                Tin thị trường
              </Typography>
              <Grid container spacing={2}>
                {data.map((article, index) => (
                  <Grid key={index} item xs={4}>
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
            <Grid item lg={3} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={12} sm={12} xs={12}>
                  <ListsMenu />
                </Grid>
                <Grid item lg={12} sm={6} xs={12}>
                  <VideoCompany articles={articles.slice(0, 3)} />
                </Grid>
                <Grid item lg={12} sm={6} xs={12}>
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
        </Grid>
      </Grid>
    </div>
  );
};
