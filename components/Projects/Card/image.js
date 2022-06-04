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
      width={720}
      height={440}
      objectFit="cover"
      src={getMediaFollowSize(image)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;
