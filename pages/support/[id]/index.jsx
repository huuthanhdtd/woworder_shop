import React from 'react';
import Seo from '../../../components/seo';
import Support from '../../../components/Support';

export default function index() {
  const seo = {
    metaTitle: `hỗ trợ`,
    metaDescription: `  hỗ trợ `,
  };
  return (
    <div>
      <Seo seo={seo} />
      <Support />
    </div>
  );
}
