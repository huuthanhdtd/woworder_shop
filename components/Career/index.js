import React, { useState } from 'react';
import styles from './styles.module.scss';
import Banner from '../../public/tuyen-dung-bg.jpg';
import Image from 'next/image';
import { Container, Grid } from '@material-ui/core';
import NextImage from '../HomePage/News/HotNews/image';
import { GoTriangleRight } from 'react-icons/go';
import { BsClockHistory } from 'react-icons/bs';
import Link from 'next/link';
import { Pagination } from '@material-ui/lab';
import { AiOutlineRight } from 'react-icons/ai';
const firstIndex = 0;
const Career = ({ articles }) => {
  const [active, setActive] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(articles.slice(0, 8));
  const handleChange = (event, value) => {
    setPage(value);
    setData(
      articles.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };
  return (
    <div className={styles.career}>
      <div className={styles.banner}>
        <Image src={Banner} />
      </div>
      <div className={styles.newsBar}>
        <Link href="/">Trang chủ</Link>
        <AiOutlineRight className={styles.arrowIcon} />
        <Link href="/tuyen-dung">Tuyển dụng</Link>
      </div>
      <Container maxWidth="lg" className={styles.container}>
        <h2>TUYỂN DỤNG</h2>
        <Grid container spacing={2}>
          {data &&
            data.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={3}
                className={styles.gridItem}
              >
                <div className={styles.wrapper}>
                  <div className={styles.image}>
                    {/* <NextImage image={item.attributes.image} /> */}
                    <img src="https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg" />
                  </div>
                  <Link href="/">
                    <div className={styles.titleBlock}>
                      <h2>{item.attributes.title}</h2>
                    </div>
                  </Link>
                  <h4>{item.attributes.description}</h4>
                </div>
              </Grid>
            ))}
          <Grid item xs={12} sm={12} md={12} className={styles.pagination}>
            <Pagination
              className={styles.paginationBlock}
              color="primary"
              count={Math.ceil(articles.length / pageSize)}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Career;
