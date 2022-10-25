import React from 'react';
import Login from '../../../components/Account/Login';
import Seo from '../../../components/seo';
// import { fetchAPI } from '../../../lib/api';

const index = () => {
  const seo = {
    metaTitle: 'Đăng nhập tài khoản',
    metaDescription: `Khanh Bui `,
  };
  return (
    <div>
      <Seo seo={seo} />
      <Login />
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
