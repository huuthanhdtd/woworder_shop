import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import DetailRecruitment from '../../components/Recruitment/Detail';
import { reverse } from '../../lib/reverse';
import { useMemo } from 'react';

const Article = ({ article, articles, hireCommon }) => {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: hireCommon.attributes.background,
    article: true,
  };

  const data = useMemo(() => {
    return reverse(articles);
  }, [articles]);
  return (
    <>
      <Seo seo={seo} />
      <DetailRecruitment
        article={article}
        articleMarkdown={article.attributes.content}
        title={article.attributes.title}
        anotherArticle={data}
        image={hireCommon.attributes.background}
      />
    </>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI('/hiring-articles', { fields: ['slug'] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI('/hiring-articles', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  });
  const [allArticles, hireCommonRes] = await Promise.all([
    fetchAPI('/hiring-articles', {
      populate: '*',
    }),
    fetchAPI('/hire-page', { populate: '*' }),
  ]);

  return {
    props: {
      article: articlesRes.data[0],
      articles: allArticles.data.filter(
        (article) => article.attributes.slug !== params.slug
      ),
      hireCommon: hireCommonRes.data,
    },
    revalidate: 1,
  };
}

export default Article;
