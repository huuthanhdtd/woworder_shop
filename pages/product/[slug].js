import { useRouter } from 'next/router';
import React from 'react';
import { useCart } from 'react-use-cart';
import DetailProduct from '../../components/DetailProduct';
import database from '../../constants/database.json';
const Product = () => {
  const router = useRouter();
  const { items } = database;
  const { getItem } = useCart();
  const cartItem = getItem(router.query.slug);

  const product = React.useMemo(() => {
    return items.find((it) => it.id === router.query.slug);
  }, [router.query.slug]);

  return <DetailProduct product={product} cartItem={cartItem} />;
};

export default Product;
