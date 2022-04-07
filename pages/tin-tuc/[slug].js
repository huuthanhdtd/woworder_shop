import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import { Categories } from '../../components/News/Categories';
import React, { useMemo } from 'react';
import { reverse } from '../../lib/reverse';

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
      <Categories articles={data} title={category} />
    </>
  );
};

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI('/categories', { fields: ['slug'] });

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI('/categories', {
    filters: { slug: params.slug },
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
