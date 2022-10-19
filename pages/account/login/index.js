import React from 'react';
import Login from '../../../components/Account/Login';
import { fetchAPI } from '../../../lib/api';

const index = () => {
  return (
    <div>
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
