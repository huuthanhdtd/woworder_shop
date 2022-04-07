import React from 'react';
import Index from '../../components/contact';
import Seo from '../../components/seo';

export default function index() {
  const seo = {
    metaTitle: `Liên hệ`,
    metaDescription: `  Liên Hệ `,
  };
  return (
    <div>
      <>
        <Seo seo={seo} />
        <Index />
      </>
    </div>
  );
}
