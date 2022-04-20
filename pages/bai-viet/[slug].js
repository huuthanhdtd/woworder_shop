import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import DetailArticle from '../../components/Article';
import { reverse } from '../../lib/reverse';
import { useMemo } from 'react';

const Article = ({ article, articles }) => {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  const data = useMemo(() => {
    return reverse(articles);
  }, [articles]);
  return (
    <>
      <Seo seo={seo} />
      <DetailArticle
        article={article}
        title={article.attributes.category.data.attributes}
        anotherArticle={data}
      />
    </>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI('/articles', { fields: ['slug'] });

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
  const articlesRes = await fetchAPI('/articles', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  });
  const allArticles = await fetchAPI('/articles', {
    filters: {
      category: {
        slug: 'tin-tuc',
      },
    },
    populate: '*',
  });

  return {
    props: {
      article: articlesRes.data[0],
      articles: allArticles.data.filter(
        (article) => article.attributes.slug !== params.slug
      ),
    },
    revalidate: 1,
  };
}

export default Article;
