import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import React, { useMemo } from 'react';
import { reverse } from '../../lib/reverse';
import CategoryPage from '../../components/Category';

const Category = ({ category }) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };
  const data = useMemo(() => {
    return reverse(category.attributes.articles.data);
  }, [category.attributes.articles.data]);
  return (
    <>
      <Seo seo={seo} />
      <CategoryPage articles={data} title={category.attributes.name} />
    </>
  );
};

export async function getStaticProps() {
  const matchingCategories = await fetchAPI('/categories', {
    filters: { slug: 'tin-tuc' },
    populate: {
      articles: {
        populate: '*',
      },
    },
  });

  return {
    props: {
      category: matchingCategories.data[0],
    },
    revalidate: 1,
  };
}

export default Category;
