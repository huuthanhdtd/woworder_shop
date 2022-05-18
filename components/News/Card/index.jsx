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
        setUrlImage(article.attributes.image.data.attributes);
      }
      if (width <= 2600) {
        if (urlCurrent.xl === undefined) {
          setUrlImage(article.attributes.image.data.attributes);
        } else {
          setUrlImage(urlCurrent.sm);
        }
      }
      if (width <= 1900) {
        if (urlCurrent.lg === undefined) {
          setUrlImage(article.attributes.image.data.attributes);
        } else {
          setUrlImage(urlCurrent.sm);
        }
      }
      if (width <= 1280) {
        if (urlCurrent.md === undefined) {
          setUrlImage(article.attributes.image.data.attributes);
        } else {
          setUrlImage(urlCurrent.sm);
        }
      }
      if (width <= 960) {
        if (urlCurrent.sm === undefined) {
          setUrlImage(article.attributes.image.data.attributes);
        } else {
          setUrlImage(urlCurrent.sm);
        }
      }
      if (width <= 600) {
        if (urlCurrent.xs === undefined) {
          setUrlImage(article.attributes.image.data.attributes);
        } else {
          setUrlImage(urlCurrent.xs);
        }
      }
    }
    return () => {
      setUrlImage(urlCurrent.sm);
    };
  }, [width]);
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
        {urlImage !== undefined ? (
          <NextImage image={urlImage} height={sizeImg.height} />
        ) : (
          <div
            style={{
              height: sizeImg.height,
              width: '100%',
              objectFit: 'contain',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Typography>Không tìm thấy ảnh này.</Typography>
          </div>
        )}
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
