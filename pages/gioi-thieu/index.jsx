import React, { useContext, useEffect } from 'react';
import Introduce from '../../components/introduce';
import Seo from '../../components/seo';

export default function index() {
  const seo = {
    metaTitle: `Giới thiệu`,
    metaDescription: `  Giới thiệu  `,
  };
  return (
    <div>
      <>
        <Seo seo={seo} />
        <Introduce />
      </>
    </div>
  );
}
