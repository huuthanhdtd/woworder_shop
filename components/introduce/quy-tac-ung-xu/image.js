import { getMediaFollowSize, getStrapiMedia } from '../../../lib/media';
import NextImage from 'next/image';

const Image = ({ image, style }) => {
  const { url, alternativeText, width, height, formats } =
    image.data.attributes;

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }
  // console.log(url);
  return (
    <NextImage
      // loader={loader}
      layout="responsive"
      width={width}
      height={height}
      objectFit="cover"
      src={url}
      alt={alternativeText || ''}
    />
  );
};

export default Image;
