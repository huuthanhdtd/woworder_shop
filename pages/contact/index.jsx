import React from 'react';
import Contact from '../../components/Contact';
import { fetchAPI } from '../../lib/api';

export default function index() {
  return (
    <div>
      <Contact />
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
