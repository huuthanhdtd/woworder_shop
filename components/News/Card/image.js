import { getMediaFollowSize, getStrapiMedia } from '../../../lib/media';
import NextImage from 'next/image';

const Image = ({ image, style }) => {
  const { url, alternativeText, width, height, formats } = image;
  // const loader = () => {
  //   return getStrapiMedia(image)
  // }
  return (
    <NextImage
      // loader={loader}
      layout="responsive"
      width={width}
      height={height}
      objectFit="cover"
      src={getMediaFollowSize(image)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;
