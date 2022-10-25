import React from 'react';
import Contact from '../../components/Contact';
import Seo from '../../components/seo';

export default function index() {
  const seo = {
    metaTitle: 'Liên hệ',
    metaDescription: `Khanh Bui `,
  };
  return (
    <div>
      <Seo seo={seo} />
      <Contact />
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
