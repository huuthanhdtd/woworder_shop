import React from 'react';
import styles from './Projects.module.scss';
import Banner from './Banner/Banner';

function LayoutProject({ children }) {
  return (
    <>
      <Banner />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

export default LayoutProject;
