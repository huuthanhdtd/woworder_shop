import { getMediaFollowSize, getStrapiMedia } from '../../lib/media';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

const Image = ({ image, style }) => {
  const { width } = useWindowSize();
  const [urlImage, setUrlImage] = useState();
  useEffect(() => {
    if (image.data?.attributes) {
      if (width) {
        if (width > 2600) {
          setUrlImage(image.data.attributes);
        }
        if (width <= 2600) {
          if (image.data?.attributes.formats?.xl === undefined) {
            setUrlImage(image.data.attributes);
          } else {
            setUrlImage(image.data.attributes.formats.xl);
          }
        }
        if (width <= 1900) {
          if (image.data?.attributes.formats?.lg === undefined) {
            setUrlImage(image.data.attributes);
          } else {
            setUrlImage(image.data.attributes.formats.lg);
          }
        }
        if (width <= 1280) {
          if (image.data?.attributes.formats?.md === undefined) {
            setUrlImage(image.data.attributes);
          } else {
            setUrlImage(image.data.attributes.formats.md);
          }
        }
        if (width <= 960) {
          if (image.data?.attributes.formats?.sm === undefined) {
            setUrlImage(image.data.attributes);
          } else {
            setUrlImage(image.data.attributes.formats.sm);
          }
        }
        if (width <= 600) {
          if (image.data?.attributes.formats?.xs === undefined) {
            setUrlImage(image.data.attributes);
          } else {
            setUrlImage(image.data.attributes.formats.xs);
          }
        }
      }
    }
  }, [width]);
  return (
    <>
      {urlImage ? (
        <NextImage
          layout="responsive"
          width={urlImage.width}
          height={urlImage.height}
          objectFit="cover"
          src={getMediaFollowSize(urlImage)}
          alt={urlImage.alternativeText || ''}
        />
      ) : (
        <NextImage
          layout="responsive"
          width={700}
          height={400}
          objectFit="cover"
          src="/error.svg"
          alt="error"
        />
      )}
    </>
  );
};

export default Image;
