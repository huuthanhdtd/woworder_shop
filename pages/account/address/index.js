import React from 'react';
import { fetchAPI } from '../../../lib/api';
import Addresses from '../../../components/Account/Address';
import { useSelector } from 'react-redux';

const index = () => {
  const { user } = useSelector((state) => state.customer);
  return (
    <div>
      {user && (
        <Addresses user={user?.item} detail={user?.included.addresses[0]} />
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
