import React from 'react';
import { useSelector } from 'react-redux';
import OrderList from '../../../components/Account/OrderList';
import Seo from '../../../components/seo';
// import { fetchAPI } from '../../../lib/api';
// import userData from '../../../constants/userdata.json';

const index = () => {
  const { user } = useSelector((state) => state.customer);
  const seo = {
    metaTitle: 'Danh sách đơn hàng',
    metaDescription: `Khanh Bui `,
  };
  // const arr = userData.included.sellitems;
  // const orderLists = arr.reduce((result, curr) => {
  //   if (!result[curr.invoice]) {
  //     return { ...result, [curr.invoice]: [curr] };
  //   } else {
  //     return {
  //       ...result,
  //       [curr.invoice]: [...result[curr.invoice], curr],
  //     };
  //   }
  // }, {});
  // console.log(orderLists);
  return (
    <div>
      <Seo seo={seo} />
      {user && (
        <OrderList
          orderLists={user?.included?.orders ? user.included.orders : []}
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
