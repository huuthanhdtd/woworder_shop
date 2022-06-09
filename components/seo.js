import Head from 'next/head';
import { useContext } from 'react';
import { GlobalContext } from '../pages/_app';
import { getMediaFollowSize, getStrapiMedia } from '../lib/media';

const Seo = ({ seo }) => {
  const { defaultSeo, siteName } = useContext(GlobalContext);
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  };
  const fullSeo = {
    ...seoWithDefaults,
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: getMediaFollowSize(
      seoWithDefaults.shareImage.data?.attributes.formats.thumbnail
    ),
  };
  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
          <meta property="og:image:height" content="354" />
          <meta property="og:image:width" content="800" />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="article" />
    </Head>
  );
};

export default Seo;
