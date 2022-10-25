import React from 'react';
import dynamic from 'next/dynamic';
import Seo from '../../components/seo';
const Carts = dynamic(() => import('../../components/Cart'), { ssr: false });

export default function index() {
  const seo = {
    metaTitle: 'Giỏ hàng',
    metaDescription: `Khanh Bui `,
  };
  return (
    <div>
      <Seo seo={seo} />
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
