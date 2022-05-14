import { getMediaFollowSize, getStrapiMedia } from '../../../lib/media';
import NextImage from 'next/image';

const Image = ({ image, style }) => {
  const { url, alternativeText, width, height, formats } =
    image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      width={formats.thumbnail.width}
      height={formats.thumbnail.height}
      src={getMediaFollowSize(formats.thumbnail)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;
