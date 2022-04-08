import Link from 'next/link';
import NextImage from './image';
import React from 'react';
import styles from './CardItem.module.scss';
import { Typography } from '@material-ui/core';
import { BsCaretRightFill } from 'react-icons/bs';

function CardItem({ article }) {
  return (
    <Link href={`/bai-viet/${article.attributes.slug}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          <NextImage image={article.attributes.image} />
        </div>
        <div className={styles.content}>
          <Typography variant="h5">
            {article.attributes.title}
            <BsCaretRightFill />
          </Typography>
          <Typography
            variant="body2"
            className={styles.description}
          >{`${article.attributes.description.slice(
            0,
            article.attributes.description.slice(0, 100).lastIndexOf(' ')
          )}...`}</Typography>
        </div>
      </div>
    </Link>
  );
}

export default CardItem;
