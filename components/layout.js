import ButtonToTop from './ScrollButton/ScrollButton';
import Footer from './Footer';
import Header from './Header';
import ContextProvider from '../constants/Context';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../lib/api';

const Layout = ({ children, corpInfor }) => {
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollState(window.scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);

    //Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollState]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <ContextProvider>
        <Header />
        {children}
        <ButtonToTop onClick={scrollToTop} show={scrollState} />
        <Footer corpInfor={corpInfor} />
      </ContextProvider>
    </>
  );
};

export default Layout;
