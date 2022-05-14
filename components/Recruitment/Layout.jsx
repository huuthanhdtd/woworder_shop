import React, { useEffect, useState } from 'react';
import styles from './Projects.module.scss';
import Banner from './Banner/Banner';
import { useWindowSize } from 'react-use';
import { getNewImageUrl } from '../../lib/resizeMarkdown';
import { getStrapiMedia } from '../../lib/media';

function LayoutProject({ children, image }) {
  const [urlImageResize, setUrlImageResize] = useState(getStrapiMedia(image));
  const { width } = useWindowSize();
  useEffect(() => {
    if (width) {
      if (width > 2600) {
        setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
      }
      if (width <= 2600) {
        if (image.data.attributes.formats.xl === undefined) {
          setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
        } else {
          setUrlImageResize(getNewImageUrl('xl_', getStrapiMedia(image)));
        }
      }
      if (width <= 1900) {
        if (image.data.attributes.formats.lg === undefined) {
          setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
        } else {
          setUrlImageResize(getNewImageUrl('lg_', getStrapiMedia(image)));
        }
      }
      if (width <= 1280) {
        if (image.data.attributes.formats.md === undefined) {
          setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
        } else {
          setUrlImageResize(getNewImageUrl('md_', getStrapiMedia(image)));
        }
      }
      if (width <= 960) {
        if (image.data.attributes.formats.sm === undefined) {
          setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
        } else {
          setUrlImageResize(getNewImageUrl('sm_', getStrapiMedia(image)));
        }
      }
      if (width <= 600) {
        if (image.data.attributes.formats.xs === undefined) {
          setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
        } else {
          setUrlImageResize(getNewImageUrl('xs_', getStrapiMedia(image)));
        }
      }
    }
  }, [width]);
  return (
    <>
      <Banner urlImageResize={urlImageResize} />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

export default LayoutProject;
