import React from 'react';
import CategoriesPage from '../../components/Categories';
import { fetchAPI } from '../../lib/api';
import { spliceBrandId } from '../../utils/filterBrandId';
import Seo from '../../components/seo';

const Categories = ({ category, categoryData }) => {
  const { items } = category;
  const seo = {
    metaTitle: items.name,
    metaDescription: `Khanh Bui ${items.name}`,
  };
  return (
    <div>
      <Seo seo={seo} />
      <CategoriesPage
        products={items.products}
        category={items}
        categoryData={categoryData}
      />
    </div>
  );
};

export default Categories;

export const getStaticPaths = async () => {
  const categoriesRes = await fetchAPI('/stores/categories');

  return {
    paths: categoriesRes.items.map((category) => ({
      params: {
        id: [`${category.id}`, '1'],
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const brandIdStr = spliceBrandId(params.id);

  const [categoryRes, categoryAllRes] = await Promise.all([
    fetchAPI(`/stores/categories/${params.id[0]}`, {
      limit: 10,
      page: params.id[1],
      brandIds: params.id.length > 2 ? brandIdStr : '',
    }),
    fetchAPI(`/stores/categories `),
  ]);

  return {
    props: {
      category: categoryRes,
      categoryData: categoryAllRes.items.filter(
        (it) => it.id === params.id[0]
      )[0],
    },
    revalidate: 1,
  };
};
