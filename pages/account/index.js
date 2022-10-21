import React from 'react';
import { fetchAPI } from '../../lib/api';
import MyAccount from '../../components/Account/MyAccount';
import { useSelector } from 'react-redux';

const Account = ({ customer, userData }) => {
  const { user } = useSelector((state) => state.customer);
  // React.useEffect(() => {
  //   if (!user) {
  //     Router.push('/account/login');
  //   }
  // }, []);
  return (
    <div>
      {user && Object.keys(user).length > 0 && (
        <MyAccount user={user.item} detail={user?.included?.addresses[0]} />
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
