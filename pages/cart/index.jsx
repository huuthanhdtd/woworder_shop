import React from 'react';
// import Carts from '../../components/Cart';
import dynamic from 'next/dynamic';
import { fetchAPI } from '../../lib/api';

const Carts = dynamic(() => import('../../components/Cart'), { ssr: false });

export default function index() {
  return (
    <div>
      <Carts />
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
