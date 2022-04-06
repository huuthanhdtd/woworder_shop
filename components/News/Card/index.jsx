import Link from 'next/link';
import NextImage from '../../image';
import React from 'react';
import styles from './CardItem.module.scss';
import { Button, Divider, Typography } from '@material-ui/core';
import { BsCaretRightFill, BsStopwatch } from 'react-icons/bs';
import Image from 'next/image';
import photo from '../../../public/Du-an/1.jpg';

function CardItem({ article }) {
  return (
    <Link href={`/bai-viet/${article.attributes.slug}`}>
      <div className={styles.container}>
        {/* <NextImage image={article.attributes.image} /> */}
        <Image src={photo} />
        <div className={styles.content}>
          {/* <Typography variant="span">
            <BsStopwatch />
            {Date(article.attributes.createdAt)}
          </Typography> */}
          <Typography variant="h5">
            {article.attributes.title} <BsCaretRightFill />
          </Typography>
          <Typography variant="body2">{article.attributes.address}</Typography>
          <Divider className={styles.divider} />
          <Typography variant="body2">{`${article.attributes.description.slice(
            0,
            article.attributes.description.slice(0, 150).lastIndexOf(' ')
          )}...`}</Typography>
        </div>
      </div>
    </Link>
  );
}

export default CardItem;
