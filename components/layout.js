// import ButtonToTop from './ScrollButton/ScrollButton';
import ContextProvider from '../constants/Context';
// import { useState, useEffect, useMemo } from 'react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ContactFixed from './ContactFixed';
import { getUserData } from '../utils/localstorage';
const Layout = ({ children, categories }) => {
  // const [scrollState, setScrollState] = useState(false);
  // const [isBarsSmall, setIsBarsSmall] = useState(false);
  const [userData, setUserData] = React.useState(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollState(window.scrollY >= 100);
  //   };
  //   if (window.scrollY >= 100) {
  //     setIsBarsSmall(true);
  //   } else {
  //     setIsBarsSmall(false);
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   //Cleanup function
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrollState]);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };
  React.useEffect(() => {
    const userData = getUserData('USER_INFOR');
    if (userData) {
      setUserData(userData);
    }
  }, []);
  return (
    <>
      {categories && (
        <ContextProvider>
          <Header categories={categories} userData={userData} />
          {children}
          <ContactFixed />
          {/* <ButtonToTop onClick={scrollToTop} show={scrollState} /> */}
          <Footer />
        </ContextProvider>
      )}
    </>
  );
};

export default Layout;
