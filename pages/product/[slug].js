import { useRouter } from 'next/router';
import React from 'react';
import DetailProduct from '../../components/DetailProduct';
import database from '../../constants/database.json';
import { getProducts } from '../../utils/localstorage';

const Product = () => {
  const router = useRouter();
  const {
    items,
    included: { productCategories },
  } = database;
  const [productsViewed, setProduct] = React.useState(null);

  React.useEffect(() => {
    const response = getProducts();
    setProduct(response);
  }, []);

  const category = productCategories.find(
    (it) => it.productId === router.query.slug
  );

  const [res, setData] = React.useState({
    product: items.find((it) => it.id === router.query.slug),
    products: productCategories.filter((it) => {
      if (it.categoryId === category.categoryId) {
        return items.find((it) => it.id === category.productId);
      }
    }),
  });

  const { product, products } = res;
  return (
    <>
      {productsViewed && (
        <DetailProduct
          product={product}
          productsViewed={productsViewed}
          products={products}
        />
      )}
    </>
  );
};

export default Product;
