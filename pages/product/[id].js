import { useRouter } from 'next/router';
import React from 'react';
import DetailProduct from '../../components/DetailProduct';
import database from '../../constants/database.json';
import { fetchAPI } from '../../lib/api';
import { getProducts } from '../../utils/localstorage';

const Product = ({ productData }) => {
  const router = useRouter();
  // const {
  //   items,
  //   included: { productCategories },
  // } = database;
  const [productsViewed, setProduct] = React.useState(null);
  // const { item } = productData;

  React.useEffect(() => {
    const response = getProducts();
    setProduct(response);
  }, []);

  // const category = productCategories.find(
  //   (it) => it.productId === router.query.id
  // );

  // const [res, setData] = React.useState({
  //   product: items.find((it) => it.id === router.query.id),
  //   products: productCategories.filter((it) => {
  //     if (it.categoryId === category.categoryId) {
  //       return items.find((it) => it.id === category.productId);
  //     }
  //   }),
  // });

  // const { product, products } = res;
  return (
    <>
      {productsViewed && (
        <DetailProduct
          // product={product}
          product={productData.item}
          productsViewed={productsViewed}
          products={[]}
        />
      )}
    </>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const productsRes = [
    { id: '824276472079320166' },
    { id: '825130375608010312' },
    { id: '824305328496575631' },
    { id: '825126470971033135' },
    { id: '825206572647974665' },
  ];
  return {
    paths: productsRes.map((product) => ({
      params: { id: product.id },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const productRes = await fetchAPI(`/stores/products/${params.id}`);
  return {
    props: {
      productData: productRes,
    },
  };
};
