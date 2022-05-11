import React, { useEffect, useContext } from 'react';
import styles from './Projects.module.scss';
import Banner from '../Banner/Banner';
import { Context } from '../../constants/Context';

function LayoutProject({ children, bannerProject }) {
  const { bannerRef, focusBanner, setFocusBanner, pageYOffset } =
    useContext(Context);
  useEffect(() => {
    if (
      pageYOffset >= bannerRef.current.offsetTop &&
      pageYOffset < bannerRef.current.offsetTop + 600
    ) {
      setFocusBanner(true);
    } else {
      setFocusBanner(false);
    }
  }, [pageYOffset]);
  return (
    <>
      <Banner
        bannerRef={bannerRef}
        focusBanner={focusBanner}
        bannerProject={bannerProject}
      />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

export default LayoutProject;
