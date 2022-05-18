import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import DetailArticle from '../../components/News/Detail';
import { reverse } from '../../lib/reverse';

const Article = ({ article, articles }) => {
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
        articleMarkdown={article.attributes.content}
        anotherArticle={articles}
        image={article.attributes.image}
      />
    </>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI('/news-articles', { fields: ['slug'] });

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
  const articlesRes = await fetchAPI('/news-articles', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  });
  const allArticles = await fetchAPI('/news-articles', {
    populate: '*',
  });

  const filter = {
    category: 'video',
    slug: params.slug,
  };

  return {
    props: {
      article: articlesRes.data[0],
      articles: reverse(
        allArticles.data.filter((article) => {
          for (let key in filter) {
            if (
              article.attributes[key] === undefined ||
              article.attributes[key] === filter[key]
            )
              return false;
          }
          return true;
        })
      ),
    },
    revalidate: 1,
  };
}

export default Article;
