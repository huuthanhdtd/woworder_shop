import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './CardItem.module.scss';
import { CardMedia, Typography } from '@material-ui/core';
import { useWindowSize } from 'react-use';
import { getMediaFollowSize } from '../../../lib/media';

function CardProject({ project, dataAos }) {
  const { width } = useWindowSize();
  const urlCurrent = project.attributes.image.data.attributes.formats;
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
  }, [width, project]);
  return (
    <>
      <Link
        href={
          project.attributes.link
            ? `${project.attributes.link}`
            : `/du-an/${project.attributes.slug}`
        }
      >
        <div className={styles.container} data-aos={dataAos} ref={refImage}>
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
          <div className={styles.title}>
            <Typography variant="h6">{project.attributes.title}</Typography>
            <Typography variant="body2" className={styles.location}>
              {`${project.attributes.description.slice(
                0,
                project.attributes.description.slice(0, 100).lastIndexOf(' ')
              )}`}
            </Typography>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardProject;
