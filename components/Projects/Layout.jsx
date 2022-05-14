import React, { useEffect, useContext, useState } from 'react';
import styles from './Projects.module.scss';
import Banner from '../Banner/Banner';
import { Context } from '../../constants/Context';
import { getStrapiMedia } from '../../lib/media';
import { getNewImageUrl } from '../../lib/resizeMarkdown';

function LayoutProject({ children, bannerProject }) {
  const {
    bannerRef,
    focusBanner,
    setFocusBanner,
    pageYOffset,
    getWindowDimensions,
    sizeImage,
    setSizeImage,
  } = useContext(Context);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [urlImageResize, setUrlImageResize] = useState(
    getStrapiMedia(bannerProject.attributes.background)
  );

  useEffect(() => {
    if (
      pageYOffset >= bannerRef.current.offsetTop &&
      pageYOffset < bannerRef.current.offsetTop + 600
    ) {
      setFocusBanner(true);
    } else {
      setFocusBanner(false);
    }
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (windowDimensions.width) {
      if (windowDimensions.width > 2600) {
        setSizeImage('');
        setUrlImageResize(
          getNewImageUrl(
            sizeImage,
            getStrapiMedia(bannerProject.attributes.background)
          )
        );
      }
      if (windowDimensions.width <= 2600) {
        setSizeImage('xl_');
        setUrlImageResize(
          getNewImageUrl(
            sizeImage,
            getStrapiMedia(bannerProject.attributes.background)
          )
        );
      }
      if (windowDimensions.width <= 1900) {
        setSizeImage('lg_');
        setUrlImageResize(
          getNewImageUrl(
            sizeImage,
            getStrapiMedia(bannerProject.attributes.background)
          )
        );
      }
      if (windowDimensions.width <= 1280) {
        setSizeImage('md_');
        setUrlImageResize(
          getNewImageUrl(
            sizeImage,
            getStrapiMedia(bannerProject.attributes.background)
          )
        );
      }
      if (windowDimensions.width <= 960) {
        setSizeImage('sm_');
        setUrlImageResize(
          getNewImageUrl(
            sizeImage,
            getStrapiMedia(bannerProject.attributes.background)
          )
        );
      }
      if (windowDimensions.width <= 600) {
        setSizeImage('xs_');
        setUrlImageResize(
          getNewImageUrl(
            sizeImage,
            getStrapiMedia(bannerProject.attributes.background)
          )
        );
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pageYOffset, windowDimensions.width]);
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
