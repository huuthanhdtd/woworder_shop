import React from 'react';
import Introduce from '../../components/Introduce';
import Seo from '../../components/seo';

export default function index() {
  const seo = {
    metaTitle: 'Giới thiệu',
    metaDescription: `Khanh Bui `,
  };
  return (
    <div>
      <Seo seo={seo} />
      <Introduce />
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
