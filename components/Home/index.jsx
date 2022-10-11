import React from 'react';
import styles from './styles.module.scss';
import SortBarMobile from '../SortBarMobile';
import { sortByPrice } from '../../utils/sortByPrice';
import { Grid } from '@material-ui/core';
import Category from './Category';

const HomePage = ({ categories, productCategories, items }) => {
  const [filters, setFilters] = React.useState({
    webs: [],
    inOrder: null,
    prices: { priceFirst: '', priceLast: '' },
  });
  const [sortPriceType, setSortPriceType] = React.useState(filters.inOrder);
  const [open, setOpen] = React.useState(false);
  console.log(filters.inOrder);
  return (
    <div className={styles.root}>
      <SortBarMobile
        setSortPriceType={setSortPriceType}
        open={open}
        setOpen={setOpen}
        filters={filters}
        setFilters={setFilters}
      />
      {categories?.map((cate, idx) => {
        const products = [];
        productCategories.filter((product) => {
          if (product.categoryId === cate.id) {
            const result = items.find((it) => it.id === product.productId);
            products.push(result);
          }
        });
        return (
          <Category
            key={idx}
            category={cate}
            products={products}
            setSortPriceType={setSortPriceType}
            sortPriceType={sortPriceType}
            setOpen={setOpen}
            open={open}
          />
        );
      })}
    </div>
  );
};
export default HomePage;
