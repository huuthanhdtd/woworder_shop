import React from 'react';
import Index from '../../components/contact';
import Seo from '../../components/seo';
import { fetchAPI } from '../../lib/api';

export default function index({ contacts }) {
  const seo = {
    metaTitle: `Liên hệ`,
    metaDescription: `  Liên Hệ `,
  };
  return (
    <div>
      <>
        <Seo seo={seo} />
        <Index contacts={contacts} />
      </>
    </div>
  );
}
export async function getStaticProps() {
  const contactRes = await fetchAPI('/branches', { populate: '*' });
  return {
    props: {
      contacts: contactRes.data,
    },
    revalidate: 1,
  };
}
