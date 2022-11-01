import React from 'react';
import CategoriesPage from '../../components/Categories';
import { fetchAPI } from '../../lib/api';
import { spliceBrandId } from '../../utils/filterBrandId';
import Seo from '../../components/seo';
import { reduceCategoryProducts } from '../../utils/common';

const limit = 10;
const Categories = ({ category, products }) => {
  const { items } = category && category;
  const seo = {
    metaTitle: items?.name,
    metaDescription: `Khanh Bui ${items?.name}`,
  };

  return (
    <div>
      <Seo seo={seo} />
      <CategoriesPage products={products} category={items} limit={limit} />
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

  const [categoryRes, brandsRes] = await Promise.all([
    fetchAPI(`/stores/categories/${params?.id?.[0]}`, {
      limit: limit,
      page: params?.id?.[1],
      brandIds: params?.id?.length > 2 ? brandIdStr : '',
    }),
    fetchAPI('/stores/brands'),
  ]);

  return {
    props: {
      products: reduceCategoryProducts(
        categoryRes.items.products,
        brandsRes.items
      ),
      category: categoryRes,
    },
    revalidate: 10,
  };
};
