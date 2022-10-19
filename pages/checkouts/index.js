import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutDetail from '../../components/Checkouts';

const Checkout = () => {
  const { user } = useSelector((state) => state.customer);
  const router = useRouter();
  React.useEffect(() => {
    if (!user) {
      router.push('/account/login');
    }
  }, []);
  return (
    <>
      {user && (
        <div>
          <CheckoutDetail
            userData={user?.item}
            address={user.included.addresses[0]}
          />
        </div>
      )}
    </>
  );
};

export default Checkout;
