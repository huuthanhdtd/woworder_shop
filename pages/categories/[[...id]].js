import React from 'react';
import CategoriesPage from '../../components/Categories';
import { fetchAPI } from '../../lib/api';
import { spliceBrandId } from '../../utils/filterBrandId';
import Seo from '../../components/seo';

const Categories = ({ category }) => {
  const { items } = category;
  const seo = {
    metaTitle: items.name,
    metaDescription: `Khanh Bui ${items.name}`,
  };
  return (
    <div>
      <Seo seo={seo} />
      <CategoriesPage products={items.products} category={items} />
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
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const brandIdStr = spliceBrandId(params.id);

  const categoryRes = await fetchAPI(`/stores/categories/${params.id[0]}`, {
    limit: 10,
    page: params.id[1],
    brandIds: params.id.length > 2 ? brandIdStr : '',
  });

  return {
    props: {
      category: categoryRes,
    },
    revalidate: 1,
  };
};
