import React, { useMemo } from 'react';
import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import CategoryPage from '../../components/Category';
import { reverse } from '../../lib/reverse';

const CareerPage = ({ category }) => {
  const seo = {
    metaTitle: 'Tuyển dụng',
    metaDescription: `Career`,
  };
  const data = useMemo(() => {
    return reverse(category.attributes.articles.data);
  }, [category.attributes.articles.data]);
  return (
    <>
      <Seo seo={seo} />
      <div>
        <CategoryPage articles={data} title={category.attributes.name} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const matchingCategories = await fetchAPI('/categories', {
    filters: { slug: 'tuyen-dung' },
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
export default CareerPage;
