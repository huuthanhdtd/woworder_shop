import React from 'react';
import SisionImg from './ImgPage2';
import Page2 from './Page2';
import styles from './index.module.scss';

export default function Index({ category, introductoryArticle }) {
  return (
    <>
      <div className={styles.sison}>
        <SisionImg
          category={category}
          introductoryArticle={introductoryArticle}
        />
      </div>
      <div className={styles.Page2}>
        <Page2 category={category} introductoryArticle={introductoryArticle} />
      </div>
    </>
  );
}
