import React from 'react';
import OrderList from '../../../components/Account/OrderList';
import { fetchAPI } from '../../../lib/api';
import userData from '../../../constants/userdata.json';
import { useSelector } from 'react-redux';

const index = () => {
  const { user } = useSelector((state) => state.customer);
  const arr = userData.included.sellitems;
  const orderLists = arr.reduce((result, curr) => {
    if (!result[curr.invoice]) {
      return { ...result, [curr.invoice]: [curr] };
    } else {
      return {
        ...result,
        [curr.invoice]: [...result[curr.invoice], curr],
      };
    }
  }, {});
  // console.log(orderLists);
  return (
    <div>
      {user && (
        <OrderList
          orderLists={
            user?.included?.orders ? user.included.orders : orderLists
          }
        />
      )}
    </div>
  );
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
