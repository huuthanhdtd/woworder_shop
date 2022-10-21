import ContextProvider from '../constants/Context';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ContactFixed from './ContactFixed';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer } from '../store/actions/customer';
const Layout = ({ children, categories }) => {
  const { user } = useSelector((state) => state.customer);
  const router = useRouter();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (user) {
      if (
        router.asPath === '/account' ||
        router.asPath === '/account/order-list' ||
        router.asPath === '/account/address'
      ) {
        dispatch(getCustomer());
      }
    } else {
      if (
        router.asPath === '/account' ||
        router.asPath === '/account/order-list' ||
        router.asPath === '/account/address'
      ) {
        router.push('/account/login');
      }
    }
  }, [router.asPath, user]);
  return (
    <>
      {categories && (
        <ContextProvider>
          <Header categories={categories} />
          {children}
          <ContactFixed />
          <Footer />
        </ContextProvider>
      )}
    </>
  );
};

export default Layout;
