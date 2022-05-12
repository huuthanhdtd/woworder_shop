import React from 'react';
import Introduce from '../../components/introduce';
import Seo from '../../components/seo';
import { fetchAPI } from '../../lib/api';

export default function index({
  category,
  parent,
  introductoryArticle,
  image,
}) {
  const seo = {
    metaTitle: `Giới thiệu`,
    metaDescription: `  Giới thiệu  `,
  };
  return (
    <div>
      <>
        <Seo seo={seo} />
        <Introduce
          category={category}
          parent={parent}
          introductoryArticle={introductoryArticle}
        />
      </>
    </div>
  );
}
export async function getStaticProps() {
  const introductoryArticleRes = await fetchAPI('/introductory-articles', {
    populate: '*',
  });
  const partnerRes = await fetchAPI('/partners', { populate: '*' });
  const categoriesRes = await fetchAPI('/categories', { populate: '*' });
  return {
    props: {
      category: categoriesRes.data,
      parent: partnerRes.data,
      introductoryArticle: introductoryArticleRes.data,
    },
    revalidate: 1,
  };
}
