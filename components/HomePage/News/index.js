import React, { useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import NextImage from './image';
import Link from 'next/link';
import { GoTriangleRight } from 'react-icons/go';
import { FaChevronRight } from 'react-icons/fa';
import { useRouter } from 'next/router';
import clsx from 'clsx';

function News({ articles, newsRef, newsIntoView }) {
  const router = useRouter();

  const data = useMemo(() => {
    const news = articles.filter(
      (item) => item.attributes.category.data.attributes.slug === 'tin-tuc'
    );
    const rs = news
      .sort(function (a, b) {
        return (
          new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)
        );
      })
      .slice(news.length - 4);
    return rs;
  }, [articles]);

  const handleClick = () => {
    router.push('/tin-tuc');
  };
  return (
    <div className={styles.newInfor} ref={newsRef}>
      <div className={styles.container}>
        <div className={styles.newsTitle}>
          <h1>Thông tin mới</h1>
          <div className={styles.newsLine}></div>
        </div>
        <div className={styles.newsContent}>
          <Grid container spacing={2} className={styles.newsList}>
            {data &&
              data.map((item, index) => (
                <Grid key={index} item md={3}>
                  <div
                    className={clsx(styles.wrapper, {
                      [styles.active]: newsIntoView === true,
                    })}
                    style={{
                      transition: `all  ${index / 3 + 0.4}s ease-in-out`,
                    }}
                  >
                    <div className={styles.image}>
                      {item.attributes.image.data !== null && (
                        <NextImage
                          image={item.attributes.image && item.attributes.image}
                        />
                      )}
                    </div>

                    <Link href="/">
                      <h3>
                        {`${item.attributes.title.slice(
                          0,
                          item.attributes.title.slice(0, 40).lastIndexOf(' ')
                        )}...`}
                        <GoTriangleRight className={styles.rightIcon} />
                      </h3>
                    </Link>
                    <p>
                      {`${item.attributes.description.slice(
                        0,
                        item.attributes.description
                          .slice(0, 150)
                          .lastIndexOf(' ')
                      )}...`}
                    </p>
                  </div>
                </Grid>
              ))}
          </Grid>
        </div>
        <div
          className={clsx(styles.btnWrapper, {
            [styles.active]: newsIntoView === true,
          })}
        >
          <button onClick={handleClick}>
            Chuyển đến phần tin tức
            <div>
              <FaChevronRight className={styles.rightIcon} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
