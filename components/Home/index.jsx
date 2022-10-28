import React from 'react';
import styles from './styles.module.scss';
import Category from './Category';

const HomePage = ({ categories }) => {
  return (
    <div className={styles.root}>
      {categories?.items?.slice(0, 12).map((cate, idx) => {
        return <Category key={idx} category={cate} products={cate.products} />;
      })}
    </div>
  );
};
export default HomePage;
