import { useRouter } from 'next/router';
import React from 'react';
import DetailProduct from '../../components/DetailProduct';
import Seo from '../../components/seo';
import { fetchAPI } from '../../lib/api';
// import { reduceCategoryProducts } from '../../utils/common';
import { getFetchLimit, getProducts } from '../../utils/localstorage';

const limit = getFetchLimit();

const Product = ({ productData, products }) => {
  const { query } = useRouter();
  const [productsViewed, setProduct] = React.useState(null);
  const seo = {
    metaTitle: productData.item.name,
    metaDescription: `Khanh Bui ${productData.item.name}`,
  };

  React.useEffect(() => {
    const response = getProducts();
    setProduct(response);
  }, [query.id]);

  return (
    <>
      <Seo seo={seo} />
      {productsViewed && productData && products && (
        <DetailProduct
          product={productData.item}
          productsViewed={productsViewed.slice(0, limit)}
          products={products.slice(0, limit)}
        />
      )}
    </>
  );
};

export default Product;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const productRes = await fetchAPI(`/stores/products/${params.id}`);
  const {
    included: { categories },
  } = productRes;
  // const [categoryRes, brandsRes] = await Promise.all([
  //   fetchAPI(`/stores/categories/${categories[0].id}`, {
  //     limit: 100,
  //     page: 1,
  //   }),
  //   fetchAPI('/stores/brands'),
  // ]);
  const {
    items: { products },
  } = await fetchAPI(`/stores/categories/${categories[0].id}`, {
    limit,
    page: 1,
  });
  // const brandsRes = await fetchAPI('/stores/brands');
  // const {
  //   items: { products },
  // } = categoryRes;

  return {
    props: {
      productData: productRes,
      products,
    },
    revalidate: 10,
  };
};
