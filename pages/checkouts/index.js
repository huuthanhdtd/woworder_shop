import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutDetail from '../../components/Checkouts';
import Seo from '../../components/seo';

const Checkout = () => {
  const { user, token } = useSelector((state) => state.customer);
  const seo = {
    metaTitle: 'Thanh toán',
    metaDescription: `Khanh Bui `,
  };

  return (
    <>
      <Seo seo={seo} />
      {user && (
        <div>
          <CheckoutDetail
            userData={user?.item}
            addresses={user?.included?.addresses}
          />
        </div>
      )}
    </>
  );
};

export default Checkout;

export const getStaticProps = async () => {
  return {
    props: {
      data: [],
    },
    revalidate: 1,
  };
};
