import React from 'react';
import styles from './styles.module.scss';
import SortBarMobile from '../SortBarMobile';
import { sortByPrice } from '../../utils/sortByPrice';
import { Grid } from '@material-ui/core';
import Category from './Category';
import database from '../../constants/database.json';

const HomePage = ({
  categories,
  // , productCategories, items
}) => {
  // const {
  //   items,
  //   included: { productCategories, categories },
  // } = database;

  return (
    <div className={styles.root}>
      {categories?.items?.map((cate, idx) => {
        // const products = [];
        // productCategories.filter((product) => {
        //   if (product.categoryId === cate.id) {
        //     const result = items.find((it) => it.id === product.productId);
        //     products.push(result);
        //   }
        // });
        return (
          <Category
            key={idx}
            // category={cate}
            // products={products}
            category={cate}
            products={cate.products}
          />
        );
      })}
    </div>
  );
};
export default HomePage;
