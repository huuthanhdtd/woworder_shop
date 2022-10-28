import axios from 'axios';
import React from 'react';
import HomePage from '../components/Home';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';

const Home = ({ categoriesData, cate }) => {
  const seo = {
    metaTitle: 'Trang Chủ',
    metaDescription: `Khanh Bui Trang Chủ`,
  };
  return (
    <>
      <Seo seo={seo} />
      <HomePage categories={categoriesData} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const categoriesRes = await fetchAPI('/stores/709313694365910020/products', {
    limit: 8,
    page: 1,
    category: '',
  });

  return {
    props: {
      categoriesData: categoriesRes.items.filter(
        (item) => item.products.length > 0
      ),
    },
    revalidate: 1,
  };
};
