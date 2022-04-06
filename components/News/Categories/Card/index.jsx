import Link from 'next/link';
import NextImage from '../../../image';
import React from 'react';
import styles from './CardItem.module.scss';
import { Typography } from '@material-ui/core';
import { BsCaretRightFill, BsStopwatch } from 'react-icons/bs';
import Image from 'next/image';
import photo from '../../../../public/Du-an/1.jpg';
import formatDate from '../../../../constants/ConvertTime';

function CardItem({ article }) {
  return (
    <Link href={`/bai-viet/${article.attributes.slug}`}>
      <div className={styles.container}>
        {/* <NextImage image={article.attributes.image} /> */}
        <Image src={photo} />
        <div className={styles.content}>
          {/* <Typography variant="subtitle2">
            <BsStopwatch />
            {formatDate(new Date(article.attributes.createdAt))}
          </Typography> */}
          <Typography variant="h5">
            {/* {article.attributes.title} */}
            {`${article.attributes.title.slice(
              0,
              article.attributes.title.slice(0, 50).lastIndexOf(' ')
            )}...`}
            <BsCaretRightFill />
          </Typography>
          <Typography variant="body2">{article.attributes.address}</Typography>
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
