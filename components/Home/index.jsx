import React from 'react';
import styles from './styles.module.scss';
import SlideProduct from './SlideProduct';

const HomePage = ({ categories, productCategories, items }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {categories?.map((cate, idx) => {
          const products = [];
          productCategories.filter((product) => {
            if (product.categoryId === cate.id) {
              const result = items.find((it) => it.id === product.productId);
              products.push(result);
            }
          });
          return <SlideProduct key={idx} category={cate} products={products} />;
        })}
      </div>
    </div>
  );
};
export default HomePage;
