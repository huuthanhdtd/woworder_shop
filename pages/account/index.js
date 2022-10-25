import React from 'react';
import { useSelector } from 'react-redux';
import MyAccount from '../../components/Account/MyAccount';
import Seo from '../../components/seo';
// import { fetchAPI } from '../../lib/api';

const Account = ({ customer, userData }) => {
  const seo = {
    metaTitle: 'Thông tin tài khoản',
    metaDescription: `Khanh Bui `,
  };
  const { user } = useSelector((state) => state.customer);
  return (
    <div>
      <Seo seo={seo} />
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
