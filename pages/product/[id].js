import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import DetailProduct from '../../components/DetailProduct';
import { fetchAPI } from '../../lib/api';
import { getProducts } from '../../utils/localstorage';

const Product = ({ productData }) => {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api`;
  const { query } = useRouter();
  const [productsViewed, setProduct] = React.useState(null);
  const [resp, setGetData] = React.useState({
    allProduct: null,
    product: null,
  });
  const { allProduct, product } = resp;

  React.useEffect(() => {
    const response = getProducts();
    setProduct(response);
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const [productRes, allProductRes] = await Promise.all([
        axios.get(`${url}/stores/products/824276472079320166`),
        axios.get(
          `${url}/stores/categories/824195071376098350?limit=100&page=1`
        ),
      ]);
      setGetData({
        allProduct: allProductRes.data?.items,
        product: productRes.data,
      });
    };

    fetchData();
  }, [query.id]);
  // console.log(resp);
  return (
    <>
      {productsViewed && resp.allProduct && resp.product && (
        <DetailProduct
          product={product.item}
          productsViewed={productsViewed}
          products={allProduct.products}
          category={allProduct}
        />
      )}
    </>
  );
};

export default Product;

// export const getStaticPaths = async () => {
//   const productsRes = [
//     { id: '824276472079320166' },
//     { id: '825130375608010312' },
//     { id: '824305328496575631' },
//     { id: '825126470971033135' },
//     { id: '825206572647974665' },
//   ];
//   return {
//     paths: productsRes.map((product) => ({
//       params: { id: product.id },
//     })),
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const productRes = await fetchAPI(`/stores/products/${params.id}`);
//   return {
//     props: {
//       productData: productRes,
//     },
//   };
// };
