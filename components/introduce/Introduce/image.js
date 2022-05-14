import { getMediaFollowSize, getStrapiMedia } from '../../../lib/media';
import NextImage from 'next/image';

const Image = ({ image }) => {
  const { alternativeText, formats } = image.data.attributes;
  return (
    <NextImage
      layout="responsive"
      width={formats.lg.width}
      height={formats.lg.height}
      src={getMediaFollowSize(formats.lg)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;
