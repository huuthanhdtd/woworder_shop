import { List, MenuItem, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import styles from './ListNews.module.scss';
import { BsCaretRightFill, BsStopwatch } from 'react-icons/bs';

const ListNews = ({ article }) => {
  return (
    <Link href={`/bai-viet/${article.attributes.slug}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <Typography variant="span" className={styles.time}>
            <BsStopwatch style={{ marginRight: 2 }} />
            {Date(article.attributes.createdAt)}
          </Typography> */}
          <Typography variant="h5">
            {article.attributes.title} <BsCaretRightFill />
          </Typography>
          <Typography variant="body2">{article.attributes.address}</Typography>
          <Typography variant="body2">{`${article.attributes.description.slice(
            0,
            article.attributes.description.slice(0, 150).lastIndexOf(' ')
          )}...`}</Typography>
        </div>
      </div>
    </Link>
  );
};

export default ListNews;
