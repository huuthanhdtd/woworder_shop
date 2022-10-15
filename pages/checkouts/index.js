import { useRouter } from 'next/router';
import React from 'react';
import CheckoutDetail from '../../components/Checkouts';
import { getUserData } from '../../utils/localstorage';

const Checkout = () => {
  const [userData, setUserData] = React.useState(null);
  const router = useRouter();
  React.useEffect(() => {
    const userData = getUserData('USER_INFOR');
    if (userData) {
      setUserData(userData);
    } else {
      router.push('/account/login');
    }
  }, []);
  return (
    <>
      {userData && (
        <div>
          <CheckoutDetail userData={userData} />
        </div>
      )}
    </>
  );
};

export default Checkout;
