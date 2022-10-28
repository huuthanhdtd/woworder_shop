import React from 'react';
import CategoriesPage from '../../components/Categories';
import { fetchAPI } from '../../lib/api';
import { spliceBrandId } from '../../utils/filterBrandId';
import Seo from '../../components/seo';
// import useProductsLoad from '../../utils/useProductsLoad';
// import { useRouter } from 'next/router';

const limit = 10;
const Categories = ({ category }) => {
  const { items } = category && category;
  const seo = {
    metaTitle: items?.name,
    metaDescription: `Khanh Bui ${items?.name}`,
  };
  // const { query } = useRouter();
  // const [pageNumber, setPageNumber] = React.useState(1);

  // const { products, hasMore, loading } = useProductsLoad(
  //   items?.products,
  //   pageNumber,
  //   limit,
  //   items.id,
  //   query.id?.[1]
  // );
  // const observer = React.useRef();

  // const lastBookElementRef = React.useCallback(
  //   (node) => {
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setPageNumber((prevPageNumber) => prevPageNumber + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //     if (!hasMore) setPageNumber(1);
  //   },
  //   [loading, hasMore, category.id, items?.products]
  // );
  return (
    <div>
      <Seo seo={seo} />
      <CategoriesPage
        products={items?.products}
        // products={
        //   products.length > 0 ? products : items.products.slice(0, limit)
        // }
        category={items}
        limit={limit}
        // lastProductRef={lastBookElementRef}
      />
    </div>
  );
};

export default Categories;

export const getStaticPaths = async () => {
  const categoriesRes = await fetchAPI('/stores/categories');

  return {
    paths: categoriesRes?.items
      ? categoriesRes?.items.map((category) => ({
          params: {
            id: [`${category.id}`, '1'],
          },
        }))
      : [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const brandIdStr = spliceBrandId(params?.id);

  const categoryRes = await fetchAPI(`/stores/categories/${params?.id?.[0]}`, {
    limit: limit,
    page: params?.id?.[1],
    brandIds: params?.id?.length > 2 ? brandIdStr : '',
  });
  // categoryRes.items.products = Array.from({ length: 6 })
  //   .map((a) => {
  //     return [...categoryRes.items.products.map((it) => it)];
  //   })
  //   .flat(1);
  return {
    props: {
      category: categoryRes,
    },
    revalidate: 10,
  };
};
