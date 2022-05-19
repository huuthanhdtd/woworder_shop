import { fetchAPI } from '../../lib/api';
import Seo from '../../components/seo';
import DetailRecruitment from '../../components/Recruitment/Detail';
import { reverse } from '../../lib/reverse';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Article = () => {
  const { query } = useRouter();
  const [resp, setGetData] = useState({
    allArticles: null,
    article: null,
    seo: null,
    hireCommon: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [articleRes, allArticlesRes, hireCommonRes] = await Promise.all([
        fetchAPI('/hiring-articles', {
          filters: {
            slug: query.slug,
          },
          populate: '*',
        }),
        fetchAPI('/hiring-articles', {
          populate: '*',
        }),
        fetchAPI('/hire-page', { populate: '*' }),
      ]);

      setGetData({
        allArticles: reverse(
          allArticlesRes.data.filter(
            (article) => article.attributes.slug !== query.slug
          )
        ),
        article: articleRes.data[0],
        hireCommon: hireCommonRes.data,
        seo: {
          metaTitle: articleRes.data[0].attributes.title,
          metaDescription: articleRes.data[0].attributes.description,
          shareImage: hireCommonRes.data.attributes.background,
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
          <DetailRecruitment
            article={resp.article}
            articleMarkdown={resp.article.attributes.content}
            anotherArticle={resp.allArticles}
            image={resp.hireCommon.attributes.background}
          />
        </>
      )}
    </>
  );
};

export default Article;
