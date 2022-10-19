import React from 'react';
import { fetchAPI } from '../../../lib/api';
import Addresses from '../../../components/Address';

const index = () => {
  return (
    <div>
      <Addresses />
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  // const categoriesRes = await fetchAPI('/stores/709313694365910020/products', {
  //   limit: 8,
  //   page: 1,
  //   category: '',
  //   populate: {
  //     sort: { id: 'ASC', name: 'DESC' },
  //   },
  // });
  return {
    props: {
      categoriesData: [],
    },
    // revalidate: 1,
  };
};
