import React from 'react';
import CategoriesPage from '../../components/Categories';
import { fetchAPI } from '../../lib/api';

const Categories = ({ category }) => {
  const { items } = category;

  return (
    <div>
      {items && <CategoriesPage products={items.products} category={items} />}
    </div>
  );
};

export default Categories;

export const getStaticPaths = async () => {
  const categoriesRes = await fetchAPI('/stores/categories', {
    fields: ['id'],
  });
  return {
    paths: categoriesRes.items.map((category) => ({
      params: {
        id: category.id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const categoryRes = await fetchAPI(`/stores/categories/${params.id}`, {
    limit: 10,
    page: 1,
  });

  return {
    props: {
      category: categoryRes,
    },
    revalidate: 1,
  };
};
