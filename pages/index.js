import React from 'react';
import { useCart } from 'react-use-cart';
import HomePage from '../components/Home';
import { CartProvider } from 'react-use-cart';
import CartTest from '../components/carttest';
import database from '../constants/database.json';

const Home = () => {
  const {
    items,
    included: { categories, productCategories },
  } = database;

  // console.log(categories);
  return (
    <>
      <HomePage
        categories={categories}
        productCategories={productCategories}
        items={items}
      />
      {/* <CartTest /> */}
    </>
  );
};

export default Home;
