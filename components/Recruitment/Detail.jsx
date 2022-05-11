import { Typography, Grid } from '@material-ui/core';
import Link from 'next/link';
import React, { useMemo } from 'react';
import styles from './Detail.module.scss';
import { Visibility } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import Banner from './Banner/Banner';
import { AiOutlineRight } from 'react-icons/ai';

function DetailRecruitment({ article, title, anotherArticle }) {
  return (
    <>
      <Grid container justifyContent="center" className={styles.container}>
        <Banner />
        <Grid item xs={9}>
          <div className={styles.title}>
            <Typography variant="h5">
              <Link href="/tuyen-dung">Tuyển dụng</Link>
              <span>
                <AiOutlineRight fontSize={15} />
              </span>
              <span>{article.attributes.title}</span>
            </Typography>
          </div>
          <div className={styles.content}>
            <ReactMarkdown
              source={article.attributes.content}
              escapeHtml={false}
            />
          </div>
          {anotherArticle.length > 0 ? (
            <div className={styles.anotherNews}>
              <Typography variant="h5">Các dự án khác</Typography>

              <div className={styles.linkNews}>
                {anotherArticle.slice(0, 5).map((article) => (
                  <Link
                    key={article.id}
                    href={`/tuyen-dung/${article.attributes.slug}`}
                  >
                    {article.attributes.title}
                  </Link>
                ))}
              </div>
              <div className={styles.button}>
                <Visibility />
                <Link href="/tuyen-dung">Xem thêm</Link>
              </div>
            </div>
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default DetailRecruitment;
