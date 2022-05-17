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
      width={formats && formats.thumbnail ? formats.thumbnail.width : width}
      height={formats && formats.thumbnail ? formats.thumbnail.height : height}
      objectFit="cover"
      src={
        formats && formats.thumbnail
          ? getMediaFollowSize(formats.thumbnail)
          : getStrapiMedia(image)
      }
      alt={alternativeText || ''}
    />
  );
};

export default Image;
