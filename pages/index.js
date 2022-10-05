import React from 'react';
import HomePage from '../components/Home';
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
    </>
  );
};

export default Home;
