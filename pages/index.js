import React from 'react';
import { useCart } from 'react-use-cart';
import HomePage from '../components/Home';
import { CartProvider } from 'react-use-cart';
import CartTest from '../components/carttest';

const Home = () => {
  return (
    <>
      <HomePage />
      {/* <CartTest /> */}
    </>
  );
};

export default Home;
