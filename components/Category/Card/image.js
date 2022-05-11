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
      width={formats.small.width}
      height={formats.small.height}
      objectFit="cover"
      src={getMediaFollowSize(formats.small)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;
