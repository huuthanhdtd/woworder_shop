import React from 'react';
import { fetchAPI } from '../../lib/api';
import MyAccount from '../../components/Account/MyAccount';
const Account = () => {
  return (
    <div>
      <MyAccount />
    </div>
  );
};

export default Account;

export const getStaticProps = async () => {
  const categoriesRes = await fetchAPI('/stores/709313694365910020/products', {
    limit: 8,
    page: 1,
    category: '',
    populate: {
      sort: { id: 'ASC', name: 'DESC' },
    },
  });

  return {
    props: {
      categoriesData: categoriesRes,
    },
    revalidate: 1,
  };
};
