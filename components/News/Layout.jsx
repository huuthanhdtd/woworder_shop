import React from 'react';
import styles from './Projects.module.scss';
import Banner from './Banner/Banner';

function LayoutProject({ children, image }) {
  return (
    <>
      <Banner image={image} />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

export default LayoutProject;
