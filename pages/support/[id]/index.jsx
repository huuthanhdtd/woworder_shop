import { useRouter } from 'next/router';
import React from 'react';
import Seo from '../../../components/seo';
import Support from '../../../components/Support';
import dataPolicy from '../../../constants/ShippingPolicy.json';

export default function index() {
  const router = useRouter();
  const Policy = dataPolicy.find((data) => data.items);
  const filPolicy = Policy.items.find(
    (item) => `/support${item.link}` === router.asPath
  );
  const seo = {
    metaTitle: `${filPolicy.title || filPolicy.name} `,
    metaDescription: `  hỗ trợ `,
  };
  return (
    <div>
      <Seo seo={seo} />
      <Support dataPolicy={dataPolicy} filPolicy={filPolicy} />
    </div>
  );
}
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
