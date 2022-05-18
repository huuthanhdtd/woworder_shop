import React, { useEffect, useState } from 'react';
import styles from './NewsPage.module.scss';
import Banner from './Banner/Banner';
import useWindowDimensions from '../../lib/hook/useWindowDimensions';

function LayoutProject({ children, image }) {
  const urlCurrent = image.data.attributes.formats;
  const [urlImageResize, setUrlImageResize] = useState(urlCurrent.thumbnail);
  const { width } = useWindowDimensions();
  useEffect(() => {
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
  }, [width, image]);
  return (
    <>
      <Banner urlImageResize={urlImageResize} />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

export default LayoutProject;
