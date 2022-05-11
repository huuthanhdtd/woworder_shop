// import Link from 'next/link';
import React from 'react';
import styles from './CardItem.module.scss';
import { Typography, Link } from '@material-ui/core';
import { BsCaretRightFill } from 'react-icons/bs';
import Image from './image';
import photo from '../../../public/Du-an/1.jpg';
import { useRouter } from 'next/router';

function CardItem({
  article,
  dataAos,
  dataAosDelay,
  setOpenVideo,
  setContentVideo,
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
      {/* // <Link href={`/bai-viet/${article.attributes.slug}`}> */}
      <div
        onClick={() => clickToDetail(article)}
        className={styles.container}
        data-aos={dataAos}
        data-aos-delay={dataAosDelay / 2}
      >
        <Image src={photo} image={article.attributes.image} />
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
    </>
  );
}

export default CardItem;
