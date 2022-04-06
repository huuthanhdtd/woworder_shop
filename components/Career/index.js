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

const firstIndex = 0;
const Career = ({ articles }) => {
  const [active, setActive] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(articles.slice(0, 6));
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
                md={4}
                className={styles.gridItem}
              >
                <div className={styles.wrapper}>
                  <div className={styles.image}>
                    <NextImage image={item.attributes.image} />
                  </div>
                  <div className={styles.times}>
                    <BsClockHistory style={{ fontSize: 20 }} />
                    <h3>
                      {new Intl.DateTimeFormat('en-GB').format(
                        new Date(item.attributes.updatedAt)
                      )}
                    </h3>
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
              color="secondary"
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
