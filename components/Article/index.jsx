import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Detail.module.scss';
import { Button, Typography, Container } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';

function DetailArticle({ article, title }) {
  return (
    <>
      <Container className={styles.container}>
        <div className={styles.title}>
          <Typography variant="h4">
            <Link href={`/danh-muc/${title.slug}`}>{title.name}</Link>
            <span>&#8250;</span>
            <span>{article.attributes.title}</span>
          </Typography>
        </div>
        <div className={styles.content}>
          <ReactMarkdown
            source={article.attributes.content}
            escapeHtml={false}
          />
        </div>

        {article.attributes.articles !== undefined ? (
          <div className={styles.anotherNews}>
            <Typography variant="h5">Các tin khác</Typography>

            <div className={styles.linkNews}>
              {article.attributes.articles.data.map((article) => (
                <Link
                  key={article.id}
                  href={`/article/${article.attributes.slug}`}
                >
                  {article.attributes.title}
                </Link>
              ))}
            </div>
            <div className={styles.button}>
              <Visibility />
              <Button>Xem thêm</Button>
            </div>
          </div>
        ) : (
          ''
        )}
      </Container>
    </>
  );
}

export default DetailArticle;
