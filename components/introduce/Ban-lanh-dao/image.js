import { getMediaFollowSize, getStrapiMedia } from '../../../lib/media';
import NextImage from 'next/image';

const Image = ({ image, style }) => {
  const { url, alternativeText, width, height, formats } =
    image.data.attributes;

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      // loader={loader}
      layout="responsive"
      width="100%"
      height="100%"
      objectFit="cover"
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;
