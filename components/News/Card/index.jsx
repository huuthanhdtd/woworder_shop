import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './CardItem.module.scss';
import { CardMedia, Typography } from '@material-ui/core';
import { BsCaretRightFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useWindowSize } from 'react-use';
import { getMediaFollowSize } from '../../../lib/media';

function CardItem({
  article,
  dataAos,
  dataAosDelay,
  setOpenVideo,
  setContentVideo,
  type,
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
  const { width } = useWindowSize();
  const urlCurrent = article.attributes.image.data.attributes.formats;
  const [urlImage, setUrlImage] = useState(urlCurrent.sm);
  const refImage = useRef();
  const [sizeImg, setSizeImg] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setSizeImg({
      width: refImage.current.clientWidth,
      height: refImage.current.clientWidth * 0.6,
    });
    if (width) {
      if (width > 2600) {
        setUrlImage(urlCurrent.sm);
      }
      if (width <= 2600) {
        if (urlCurrent.xl === undefined) {
          setUrlImage(urlCurrent.sm);
        } else {
          setUrlImage(urlCurrent.sm);
        }
      }
      if (width <= 1900) {
        if (urlCurrent.lg === undefined) {
          setUrlImage(urlCurrent.sm);
        } else {
          setUrlImage(urlCurrent.sm);
        }
      }
      if (width <= 1280) {
        if (urlCurrent.md === undefined) {
          setUrlImage(urlCurrent.sm);
        } else {
          setUrlImage(urlCurrent.sm);
        }
      }
      if (width <= 960) {
        if (urlCurrent.sm === undefined) {
          setUrlImage(urlCurrent.sm);
        } else {
          setUrlImage(urlCurrent.sm);
        }
      }
      if (width <= 600) {
        if (urlCurrent.xs === undefined) {
          setUrlImage(urlCurrent.xs);
        } else {
          setUrlImage(urlCurrent.xs);
        }
      }
    }
  }, [width, article]);
  return (
    <>
      {/* <Link href={`/tin-tuc/${article.attributes.slug}`}> */}
      <div
        onClick={() => clickToDetail(article)}
        className={styles.container}
        data-aos={dataAos}
        data-aos-delay={dataAosDelay / 2}
        ref={refImage}
      >
        <CardMedia
          image={getMediaFollowSize(urlImage)}
          style={{
            height: sizeImg.height,
            width: '100%',
            objectFit: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
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
