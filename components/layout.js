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
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (
      router.asPath === '/account' ||
      router.asPath === '/account/order-list' ||
      router.asPath === '/account/address'
    ) {
      if (token) {
        dispatch(getCustomer());
      } else {
        router.push('/account/login');
      }
    }
  }, [router.asPath]);
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
