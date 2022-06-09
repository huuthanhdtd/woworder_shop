import React, { useMemo } from 'react';
import { fetchAPI } from '../../lib/api';
import { reverse } from '../../lib/reverse';
import Seo from '../../components/seo';
import CategoryPage from '../../components/News';

const Category = ({ articlesData, newsCommon }) => {
  const seo = {
    metaTitle: newsCommon.attributes.seo.metaTitle,
    metaDescription: `${newsCommon.attributes.seo.metaDescription}`,
    shareImage: newsCommon.attributes.background,
    article: true,
  };
  // const data = useMemo(() => {
  //   return reverse(articlesData);
  // }, [articlesData]);
  return (
    <>
      <Seo seo={seo} />
      <CategoryPage
        articles={articlesData}
        title={newsCommon.attributes.seo.metaTitle}
        image={newsCommon.attributes.background}
      />
    </>
  );
};

export async function getStaticProps() {
  const [matchingCategories, newsPageRes] = await Promise.all([
    fetchAPI('/news-articles', {
      populate: '*',
    }),
    fetchAPI('/news-page', { populate: '*' }),
  ]);

  return {
    props: {
      articlesData: reverse(matchingCategories.data),
      newsCommon: newsPageRes.data,
    },
    revalidate: 1,
  };
}

export default Category;
