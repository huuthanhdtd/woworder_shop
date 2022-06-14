import React, { useEffect, useState } from 'react';
import styles from './Recruitment.module.scss';
import Banner from './Banner/Banner';
import { useWindowSize } from 'react-use';

function LayoutProject({ children, image }) {
  const [urlImageResize, setUrlImageResize] = useState(image.data?.attributes);
  const { width } = useWindowSize();
  useEffect(() => {
    if (image && image.data?.attributes) {
      const urlCurrent = image.data.attributes.formats;
      if (width) {
        if (width > 2600) {
          setUrlImageResize(image.data.attributes);
        }
        if (width <= 2600) {
          if (urlCurrent.xl === undefined) {
            setUrlImageResize(image.data.attributes);
          } else {
            setUrlImageResize(urlCurrent.xl);
          }
        }
        if (width <= 1900) {
          if (urlCurrent.lg === undefined) {
            setUrlImageResize(image.data.attributes);
          } else {
            setUrlImageResize(urlCurrent.lg);
          }
        }
        if (width <= 1280) {
          if (urlCurrent.md === undefined) {
            setUrlImageResize(image.data.attributes);
          } else {
            setUrlImageResize(urlCurrent.md);
          }
        }
        if (width <= 960) {
          if (urlCurrent.sm === undefined) {
            setUrlImageResize(image.data.attributes);
          } else {
            setUrlImageResize(urlCurrent.sm);
          }
        }
        if (width <= 600) {
          if (urlCurrent.xs === undefined) {
            setUrlImageResize(image.data.attributes);
          } else {
            setUrlImageResize(urlCurrent.xs);
          }
        }
      }
    }
  }, [width, image]);
  return (
    <>
      <Banner urlImageResize={urlImageResize} />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

export default LayoutProject;
