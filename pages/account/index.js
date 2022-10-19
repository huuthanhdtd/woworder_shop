import React from 'react';
import { fetchAPI } from '../../lib/api';
import MyAccount from '../../components/Account/MyAccount';
import { useSelector } from 'react-redux';
import Router from 'next/router';
const Account = ({ customer, userData }) => {
  const { user } = useSelector((state) => state.customer);
  React.useEffect(() => {
    if (!user) {
      Router.push('/account/login');
    }
  }, [user]);
  return (
    <div>
      {user && (
        <MyAccount user={user.item} detail={user.included.addresses[0]} />
      )}
    </div>
  );
};

export default Account;

export const getStaticProps = async () => {
  return {
    props: {
      data: [],
    },
    revalidate: 1,
  };
};
