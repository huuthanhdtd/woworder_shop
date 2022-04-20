import React, { useRef, useEffect, useState } from 'react';
import styles from './Projects.module.scss';
import Banner from '../Banner/Banner';
import { useWindowScroll } from 'react-use';

function LayoutProject({ children }) {
  const bannerRef = useRef(null);
  const [focusBanner, setFocusBanner] = useState(false);
  const { y: pageYOffset } = useWindowScroll();
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
      <Banner bannerRef={bannerRef} focusBanner={focusBanner} />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

export default LayoutProject;
