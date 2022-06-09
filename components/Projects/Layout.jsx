import React, { useEffect, useContext, useState } from 'react';
import styles from './Projects.module.scss';
import Banner from '../Banner/Banner';
import { Context } from '../../constants/Context';

function LayoutProject({ children, bannerProject, image, width }) {
  const { bannerRef, focusBanner, setFocusBanner, pageYOffset } =
    useContext(Context);

  const [urlImageResize, setUrlImageResize] = useState();
  useEffect(() => {
    if (
      pageYOffset >= bannerRef.current.offsetTop &&
      pageYOffset < bannerRef.current.offsetTop + 600
    ) {
      setFocusBanner(true);
    } else {
      setFocusBanner(false);
    }
    if (image.data?.attributes) {
      const imageCurrent = image.data.attributes.formats;
      if (width) {
        if (width > 2600) {
          setUrlImageResize(image.data.attributes);
        }
        if (width <= 2600) {
          if (imageCurrent.xl === undefined) {
            setUrlImageResize(image.data.attributes);
          } else {
            setUrlImageResize(imageCurrent.xl);
          }
        }
        if (width <= 1900) {
          if (imageCurrent.lg === undefined) {
            setUrlImageResize(image.data.attributes);
          } else {
            setUrlImageResize(imageCurrent.lg);
          }
        }
        if (width <= 1280) {
          if (imageCurrent.md === undefined) {
            setUrlImageResize(image.data.attributes);
          } else {
            setUrlImageResize(imageCurrent.md);
          }
        }
        if (width <= 960) {
          if (imageCurrent.sm === undefined) {
            setUrlImageResize(image.data.attributes);
          } else {
            setUrlImageResize(imageCurrent.sm);
          }
        }
        if (width <= 600) {
          if (imageCurrent.xs === undefined) {
            setUrlImageResize(image.data.attributes);
          } else {
            setUrlImageResize(imageCurrent.xs);
          }
        }
      }
    }
  }, [pageYOffset, width, image]);
  return (
    <>
      <Banner
        bannerRef={bannerRef}
        focusBanner={focusBanner}
        bannerProject={bannerProject}
        urlImageResize={urlImageResize}
      />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

export default LayoutProject;
