import React, { useEffect, useMemo, useState } from 'react';
// import Image from './imageSlide';
import { getMediaFollowSize } from '../../lib/media';
import { CardMedia } from '@material-ui/core';
import NextImage from 'next/image';

const RenderImage = ({ heightImg, data, widthImg, bgSize }) => {
  const curr = data.data !== null && data.data.attributes.formats;
  const [img, setImg] = useState();
  useEffect(() => {
    console.log(widthImg);
    console.log(heightImg);

    const input = data.data;
    if (input !== null) {
      if (widthImg <= 245) {
        if (curr.thumbnail) {
          setImg(curr.thumbnail);
        } else {
          setImg(input.attributes);
        }
      } else if (widthImg <= 600) {
        if (curr.xs) {
          setImg(curr.xs);
        } else {
          setImg(input.attributes);
        }
      } else if (widthImg <= 960) {
        if (curr.sm) {
          setImg(curr.sm);
        } else {
          setImg(input.attributes);
        }
      } else if (widthImg <= 1264) {
        if (curr.md) {
          setImg(curr.md);
        } else {
          setImg(input.attributes);
        }
      } else if (widthImg <= 1904) {
        if (curr.lg) {
          setImg(curr.lg);
        } else {
          setImg(input.attributes);
        }
      } else if (widthImg <= 2600 && curr.lg) {
        if (curr.lg) {
          setImg(curr.lg);
        } else {
          setImg(input.attributes);
        }
      } else {
        setImg(input.attributes);
      }
    }
  }, [widthImg]);
  return (
    <>
      {/* <CardMedia
        style={{
          height: heightImg,
          width: widthImg,
          objectFit: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          // backgroundSize: bgSize,
          position: 'relative',
        }}
      > */}
      {img ? (
        <NextImage
          layout="responsive"
          width={widthImg}
          height={heightImg}
          objectFit="fill"
          src={getMediaFollowSize(img)}
          // alt={urlImage.alternativeText || ''}
        />
      ) : (
        <NextImage
          width={700}
          height={500}
          objectFit="cover"
          src="/errorImage.jpg"
        />
      )}
      {/* </CardMedia> */}

      {/* <CardMedia
        image={data.data !== null ? getMediaFollowSize(img) : '/errorImage.jpg'}
        style={{
          height: heightImg,
          width: '100%',
          objectFit: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: bgSize,
        }}
      /> */}
    </>
  );
};
export default RenderImage;
