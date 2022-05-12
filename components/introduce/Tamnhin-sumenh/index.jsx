import React from 'react';
import SisionImg from './ImgPage2';
import Page2 from './Page2';
import styles from './index.module.scss';

export default function Index({ item, introductoryArticle }) {
  return (
    <>
      <div className={styles.sison}>
        <SisionImg item={item} introductoryArticle={introductoryArticle} />
      </div>
      <div className={styles.Page2}>
        <Page2 item={item} introductoryArticle={introductoryArticle} />
      </div>
    </>
  );
}
