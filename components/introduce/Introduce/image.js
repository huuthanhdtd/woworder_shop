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
      width={formats.medium.width}
      height={formats.medium.height}
      // objectFit="cover"
      src={getMediaFollowSize(formats.medium)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;