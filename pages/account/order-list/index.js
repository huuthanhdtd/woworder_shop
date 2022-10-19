import React from 'react';
import { useCart } from 'react-use-cart';
import OrderList from '../../../components/Account/OrderList';
import { fetchAPI } from '../../../lib/api';

const index = () => {
  const { items, cartTotal } = useCart();

  return <OrderList items={items} cartTotal={cartTotal} />;
};

export default index;

export const getStaticProps = async () => {
  return {
    props: {
      data: [],
    },
    revalidate: 1,
  };
};
