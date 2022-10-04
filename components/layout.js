import ButtonToTop from './ScrollButton/ScrollButton';
import ContextProvider from '../constants/Context';
import { useState, useEffect, useMemo } from 'react';
import Footer from './Footer';
import Header from './Header';
import ContactFixed from './ContactFixed';

const Layout = ({ children }) => {
  const [scrollState, setScrollState] = useState(false);
  const [isBarsSmall, setIsBarsSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollState(window.scrollY >= 100);
    };
    if (window.scrollY >= 100) {
      setIsBarsSmall(true);
    } else {
      setIsBarsSmall(false);
    }

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
        <ContactFixed />
        {/* <ButtonToTop onClick={scrollToTop} show={scrollState} /> */}
        <Footer />
      </ContextProvider>
    </>
  );
};

export default Layout;
