import ButtonToTop from './ScrollButton/ScrollButton';
import Footer from './Footer';
import Header from './Header';
import ContextProvider from '../constants/Context';
import { useState, useEffect, useMemo } from 'react';
import navs from '../constants/navsBar.json';

const Layout = ({ children, corpInfor, categories, homepage }) => {
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

  const newNav = useMemo(() => {
    const newCategory = categories.reverse().sort(function (a, b) {
      return a.attributes.priority - b.attributes.priority;
    });
    const newAr = newCategory.map((item) => {
      return {
        title: item.attributes.name,
        link: '/gioi-thieu',
        idNav: item.attributes.slug,
      };
    });
    const rr = navs;
    rr.find((item) => item.title === 'giới thiệu').list = newAr;
    return rr;
  }, []);
  return (
    <>
      <ContextProvider>
        <Header
          isBarsSmall={isBarsSmall}
          navs={newNav}
          homepage={homepage}
          corpInfor={corpInfor}
        />
        {children}
        <ButtonToTop onClick={scrollToTop} show={scrollState} />
        {corpInfor !== undefined && (
          <Footer corpInfor={corpInfor} navs={newNav} categories={categories} />
        )}
      </ContextProvider>
    </>
  );
};

export default Layout;
