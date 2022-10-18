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
  const categoriesRes = await fetchAPI('/stores/709313694365910020/products', {
    limit: 8,
    page: 1,
    category: '',
    populate: {
      sort: { id: 'ASC', name: 'DESC' },
    },
  });

  return {
    props: {
      categoriesData: categoriesRes,
    },
    revalidate: 1,
  };
};
