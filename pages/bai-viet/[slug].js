import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { fetchAPI } from '../../lib/api';
import Layout from '../../components/layout';
import NextImage from '../../components/image';
import Seo from '../../components/seo';
import { getStrapiMedia } from '../../lib/media';
import DetailArticle from '../../components/Article';

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image);

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <>
      <Seo seo={seo} />
      <DetailArticle
        article={article}
        title={article.attributes.category.data.attributes}
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
  const categoriesRes = await fetchAPI('/categories');

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  };
}

export default Article;
