import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import PageSearch from '../../components/PageSearch';
import { fetchAPI } from '../../lib/api';

export default function index({ category }) {
  const [loadinged, setLoadinged] = useState(true);
  console.log(category);
  useEffect(() => {
    if (category.item) {
      setLoadinged(false);
    }
  }, []);
  return loadinged ? (
    <Loading />
  ) : (
    <div>
      <PageSearch />
    </div>
  );
}
export const getStaticProps = async () => {
  const categoryRes = await fetchAPI('/stores/products/728247300324853559', {
    limit: 8,
    page: 1,
    category: '',
  });
  return {
    props: {
      category: categoryRes,
    },
    revalidate: 1,
  };
};
