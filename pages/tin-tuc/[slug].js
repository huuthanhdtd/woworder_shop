import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import DetailArticle from '../../components/News/Detail';
import { reverse } from '../../lib/reverse';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Article = () => {
  const { query } = useRouter();
  const [resp, setGetData] = useState({
    allArticles: null,
    article: null,
    seo: null,
  });

  useEffect(() => {
    const filter = {
      category: 'video',
      slug: query.slug,
    };

    const fetchData = async () => {
      const [articleRes, allArticlesRes] = await Promise.all([
        fetchAPI('/news-articles', {
          filters: {
            slug: query.slug,
          },
          populate: '*',
        }),
        fetchAPI('/news-articles', {
          populate: '*',
        }),
      ]);

      setGetData({
        allArticles: reverse(
          allArticlesRes.data.filter((article) => {
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
        article: articleRes.data[0],
        seo: {
          metaTitle: articleRes.data[0].attributes.title,
          metaDescription: articleRes.data[0].attributes.description,
          shareImage: articleRes.data[0].attributes.image,
          article: true,
        },
      });
    };

    fetchData();
  }, [query]);

  return (
    <>
      {resp.article && (
        <>
          <Seo seo={resp.seo} />
          <DetailArticle
            article={resp.article}
            articleMarkdown={resp.article.attributes.content}
            anotherArticle={resp.allArticles}
            image={resp.article.attributes.image}
          />
        </>
      )}
    </>
  );
};

export default Article;
