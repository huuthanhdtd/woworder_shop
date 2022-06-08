import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './CardItem.module.scss';
import { CardMedia, Typography } from '@material-ui/core';
import { BsCaretRightFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import NextImage from './image';

function CardItem({
  article,
  dataAos,
  dataAosDelay,
  setOpenVideo,
  setContentVideo,
  type,
  width,
}) {
  const router = useRouter();
  const clickToDetail = (data) => {
    if (data.attributes.category === 'video') {
      setOpenVideo(true);
      setContentVideo(article.attributes.content);
    } else {
      router.push(`/tin-tuc/${article.attributes.slug}`);
    }
  };

  return (
    <>
      {/* <Link href={`/tin-tuc/${article.attributes.slug}`}> */}
      <div
        onClick={() => clickToDetail(article)}
        className={styles.container}
        data-aos={dataAos}
        data-aos-delay={dataAosDelay / 2}
      >
        <NextImage image={article.attributes.image} />

        <div className={styles.content}>
          <Typography variant="h5">
            {article.attributes.category === 'video' && type === null
              ? 'Video: '
              : ''}
            {article.attributes.title} <BsCaretRightFill fontSize="small" />
          </Typography>
        </div>
        <Typography variant="body2">{`${article.attributes.description.slice(
          0,
          article.attributes.description.slice(0, 70).lastIndexOf(' ')
        )}...`}</Typography>
      </div>
      {/* </Link> */}
    </>
  );
}

export default CardItem;
