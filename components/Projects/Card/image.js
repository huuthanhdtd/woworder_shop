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
      width={formats.medium.width}
      height={450}
      objectPosition="top center"
      src={getMediaFollowSize(formats.medium)}
      alt={alternativeText || ''}
      layout="responsive"
      objectFit="cover"
      quality={100}
    />
  );
};

export default Image;
