import React from 'react';
// import { fetchAPI } from '../../../lib/api';
import Addresses from '../../../components/Account/Address';
import { useSelector } from 'react-redux';
import Seo from '../../../components/seo';

const index = () => {
  const { user } = useSelector((state) => state.customer);
  const seo = {
    metaTitle: 'Danh sách địa chỉ',
    metaDescription: `Khanh Bui `,
  };
  return (
    <div>
      <Seo seo={seo} />
      {user && Object.keys(user).length > 0 && (
        <Addresses user={user?.item} addresses={user?.included?.addresses} />
      )}
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  return {
    props: {
      data: [],
    },
    revalidate: 1,
  };
};
