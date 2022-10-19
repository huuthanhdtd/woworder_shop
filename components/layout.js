import ContextProvider from '../constants/Context';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ContactFixed from './ContactFixed';
const Layout = ({ children, categories }) => {
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
