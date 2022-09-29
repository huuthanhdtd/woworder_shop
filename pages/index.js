import React from 'react';
import { useCart } from 'react-use-cart';
import HomePage from '../components/Home';

const Home = () => {
  const { items } = useCart();
  console.log(items);
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
