import { getStrapiMedia } from '../../../lib/media';
import NextImage from 'next/image';

const Image = ({ image, style }) => {
  const { url, alternativeText, width, height } = image.data.attributes;

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      // loader={loader}
      layout="responsive"
      width={421}
      height={107}
      objectFit="cover"
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;
