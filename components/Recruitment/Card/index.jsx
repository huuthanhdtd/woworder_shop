import Link from 'next/link';
import React from 'react';
import styles from './CardItem.module.scss';
import { Typography } from '@material-ui/core';
import { BsCaretRightFill } from 'react-icons/bs';
import NextImage from './image';

function CardItem({ article, dataAos, dataAosDelay }) {
  return (
    <Link href={`/tuyen-dung/${article.attributes.slug}`}>
      <div
        className={styles.container}
        data-aos={dataAos}
        data-aos-delay={dataAosDelay / 2}
      >
        {article.attributes.image && (
          <NextImage image={article.attributes.image} />
        )}
        <div className={styles.content}>
          <Typography variant="h5">
            {article.attributes.title} <BsCaretRightFill fontSize="small" />
          </Typography>
        </div>
        <Typography variant="body2">{`${article.attributes.description.slice(
          0,
          article.attributes.description.slice(0, 70).lastIndexOf(' ')
        )}...`}</Typography>
      </div>
    </Link>
  );
}

export default CardItem;
