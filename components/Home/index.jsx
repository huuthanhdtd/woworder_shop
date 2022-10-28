import React from 'react';
import styles from './styles.module.scss';
import Category from './Category';
import Aos from 'aos';

const HomePage = ({ categories }) => {
  React.useEffect(() => {
    Aos.init({ delay: 100 });
  }, [categories]);
  return (
    <div className={styles.root}>
      {categories.slice(0, 10).map((cate, idx) => {
        return <Category key={idx} category={cate} products={cate.products} />;
      })}
    </div>
  );
};
export default HomePage;
