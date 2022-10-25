import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import PageSearch from '../../components/PageSearch';
import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';

export default function index({ category }) {
  const seo = {
    metaTitle: 'Tìm kiếm sản phẩm',
    metaDescription: `Khanh Bui `,
  };
  return (
    <div>
      <Seo seo={seo} />
      <PageSearch />
    </div>
  );
}
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
