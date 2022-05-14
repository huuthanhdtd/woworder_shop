import React, { useEffect, useMemo, useState } from 'react';
// import Image from './imageSlide';
import { getMediaFollowSize } from '../../lib/media';
import { CardMedia } from '@material-ui/core';

const RenderImage = ({ heightImg, data, widthImg }) => {
  const curr = data.data.attributes.formats;
  const [img, setImg] = useState(curr.thumbnail);
  useEffect(() => {
    if (widthImg <= 245) {
      if (curr.thumbnail) {
        setImg(curr.thumbnail);
      } else {
        setImg(data.data.attributes);
      }
    } else if (widthImg <= 600) {
      if (curr.xs) {
        setImg(curr.xs);
      } else {
        setImg(data.data.attributes);
      }
    } else if (widthImg <= 960) {
      if (curr.sm) {
        setImg(curr.sm);
      } else {
        setImg(data.data.attributes);
      }
    } else if (widthImg <= 1264) {
      if (curr.md) {
        setImg(curr.md);
      } else {
        setImg(data.data.attributes);
      }
    } else if (widthImg <= 1904) {
      if (curr.lg) {
        setImg(curr.lg);
      } else {
        setImg(data.data.attributes);
      }
    } else if (widthImg <= 2600 && curr.lg) {
      if (curr.lg) {
        setImg(curr.lg);
      } else {
        setImg(data.data.attributes);
      }
    } else {
      setImg(data.data.attributes);
    }
  }, [widthImg]);
  return (
    <>
      <CardMedia
        image={getMediaFollowSize(img)}
        style={{
          height: heightImg,
          width: '100%',
          objectFit: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </>
  );
};
export default RenderImage;
