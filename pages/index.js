import React from 'react';
import HomePage from '../components/Home';
// import database from '../constants/database.json';
import { fetchAPI } from '../lib/api';

const Home = ({ categoriesData, cate }) => {
  // const {
  //   items,
  //   included: { categories, productCategories },
  // } = database;

  // // console.log(categories);
  // console.log(categoriesData);
  return (
    <>
      <HomePage
        // categories={categories}
        // productCategories={productCategories}
        // items={items}
        categories={categoriesData}
      />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const categoriesRes = await fetchAPI('/stores/709313694365910020/products', {
    limit: 8,
    page: 1,
    category: '',
    populate: {
      sort: { id: 'ASC', name: 'DESC' },
    },
  });

  return {
    props: {
      categoriesData: categoriesRes,
    },
    revalidate: 1,
  };
};
