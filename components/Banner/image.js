import { getMediaFollowSize } from '../../lib/media';
import NextImage from 'next/image';

const Image = ({ image, style, height, width }) => {
  return (
    <>
      {image && height & width ? (
        <NextImage
          layout="responsive"
          width={width}
          height={height}
          objectFit="cover"
          src={getMediaFollowSize(image)}
          alt={image.alternativeText || ''}
        />
      ) : (
        <NextImage
          layout="responsive"
          width={700}
          height={500}
          objectFit="cover"
          src="/errorImage.jpg"
        />
      )}
    </>
  );
};

export default Image;
