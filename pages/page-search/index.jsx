import React from 'react';
import PageSearch from '../../components/PageSearch';
import { fetchAPI } from '../../lib/api';

export default function index({ category }) {
  return (
    <div>
      <PageSearch />
    </div>
  );
}
export const getStaticProps = async () => {
  const categoryRes = await fetchAPI('/stores/products/728247300324853559');
  return {
    props: {
      category: categoryRes,
    },
    revalidate: 1,
  };
};
