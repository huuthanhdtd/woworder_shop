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
          loading="eager"
        />
      ) : (
        <NextImage
          layout="fill"
          // width={700}
          // height={400}
          objectFit="cover"
          src="/error.svg"
          loading="eager"
        />
      )}
    </>
  );
};

export default Image;
