// import axios from 'axios';
import React from 'react';
import HomePage from '../components/Home';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
// import { reduceHomeProducts } from '../utils/common';
import useProductsLoad from '../utils/useProductsLoad';

const Home = ({ categoriesData }) => {
  const seo = {
    metaTitle: 'Trang Chủ',
    metaDescription: `Khanh Bui Trang Chủ`,
  };
  const [pageNumber, setPageNumber] = React.useState(4);
  const { products, hasMore, loading } = useProductsLoad(
    categoriesData,
    pageNumber,
    categoriesData.length
  );

  const observer = React.useRef();

  const endElementRef = React.useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 2);
        }
      });
      if (node) observer.current.observe(node);
      if (!hasMore) setPageNumber(4);
    },
    [loading, hasMore, categoriesData]
  );
  return (
    <>
      <Seo seo={seo} />
      <HomePage categories={products} endElementRef={endElementRef} />
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
  // fetchAPI('/stores/brands'),
  return {
    props: {
      // categoriesData: reduceHomeProducts(
      //   categoriesRes.items,
      //   brandsRes.items
      // ).filter((item) => item.products.length > 0),
      categoriesData: categoriesRes ? categoriesRes.items : [],
    },
    revalidate: 1,
  };
};
