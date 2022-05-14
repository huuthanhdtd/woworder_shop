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
      width={formats.sm.width}
      height={560}
      objectPosition="top center"
      src={getMediaFollowSize(formats.md)}
      alt={alternativeText || ''}
      layout="responsive"
      objectFit="cover"
    />
  );
};

export default Image;
