import React from 'react';
import { fetchAPI } from '../../../lib/api';
import Addresses from '../../../components/Account/Address';
import { useSelector } from 'react-redux';

const index = () => {
  const { user } = useSelector((state) => state.customer);
  // console.log(user);
  return (
    <div>
      {user && (
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
