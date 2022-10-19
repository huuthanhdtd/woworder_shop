import React from 'react';
import dynamic from 'next/dynamic';
const Carts = dynamic(() => import('../../components/Cart'), { ssr: false });

export default function index() {
  return (
    <div>
      <Carts />
    </div>
  );
}
export const getStaticProps = async () => {
  return {
    props: {
      category: [],
    },
  };
};
