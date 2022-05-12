import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Detail.module.scss';
import { Button, Typography, Container, CardMedia } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { AiOutlineRight } from 'react-icons/ai';
import { getStrapiMedia } from '../../lib/media';

function DetailArticle({ article, title, anotherArticle }) {
  return (
    <>
      <CardMedia
        className={styles.banner}
        image={getStrapiMedia(article.attributes.image)}
      >
        <div className={styles.cover}></div>
      </CardMedia>
      <Container className={styles.container}>
        <div className={styles.title}>
          <Typography variant="h5">
            <Link href="/tin-tuc">Tin tức</Link>
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

        {anotherArticle !== undefined ? (
          <div className={styles.anotherNews}>
            <Typography variant="h5">Các tin khác</Typography>
            <div className={styles.linkNews}>
              {anotherArticle.map((article) => (
                <Link
                  key={article.id}
                  href={`/tin-tuc/${article.attributes.slug}`}
                >
                  {article.attributes.title}
                </Link>
              ))}
            </div>
            <div className={styles.button}>
              <Visibility />
              <Link href="/tin-tuc">
                <Button>Xem thêm</Button>
              </Link>
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
