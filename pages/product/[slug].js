import { useRouter } from 'next/router';
import React from 'react';
import DetailProduct from '../../components/DetailProduct';
import database from '../../constants/database.json';
const Product = () => {
  const router = useRouter();
  const { items } = database;

  const product = React.useMemo(() => {
    return items.find((it) => it.id === router.query.slug);
  }, [router.query.slug]);

  return <DetailProduct product={product} />;
};

export default Product;
