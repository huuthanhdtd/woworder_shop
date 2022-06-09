import React, { useMemo } from 'react';
import { fetchAPI } from '../../lib/api';
import { reverse } from '../../lib/reverse';
import Seo from '../../components/seo';
import CategoryPage from '../../components/Recruitment';

const CareerPage = ({ articles, recruitmentCommon }) => {
  const seo = {
    metaTitle: recruitmentCommon.attributes.seo.metaTitle,
    metaDescription: `${recruitmentCommon.attributes.seo.metaDescription}`,
    shareImage: recruitmentCommon.attributes.background,
    article: true,
  };
  const data = useMemo(() => {
    return reverse(articles);
  }, [articles]);
  return (
    <>
      <Seo seo={seo} />
      <CategoryPage
        articles={data}
        title={recruitmentCommon.attributes.seo.metaTitle}
        image={recruitmentCommon.attributes.background}
      />
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [recruitmentRes, recruimentCommonRes] = await Promise.all([
    fetchAPI('/hiring-articles', {
      populate: '*',
    }),
    fetchAPI('/hire-page', { populate: '*' }),
  ]);

  return {
    props: {
      articles: recruitmentRes.data,
      recruitmentCommon: recruimentCommonRes.data,
    },
    revalidate: 1,
  };
}
export default CareerPage;
