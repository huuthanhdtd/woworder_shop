import App from 'next/app';
import Head from 'next/head';
import '../assets/css/style.css';
import '../assets/css/slick.css';
import { createContext } from 'react';
import { fetchAPI } from '../lib/api';
import { getStrapiMedia } from '../lib/media';
import Layout from '../components/layout';
import 'aos/dist/aos.css';

// Store Tpcapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global, corpInfor, categories, homepage } = pageProps;
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Layout
          corpInfor={corpInfor}
          categories={categories}
          homepage={homepage}
        >
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Tpcapi

  const [globalRes, corpRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI('/global', {
      populate: {
        favicon: '*',
        defaultSeo: {
          populate: '*',
        },
      },
    }),
    fetchAPI('/corp-infor'),
    fetchAPI('/categories'),
    fetchAPI('/homepage'),
  ]);

  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: {
      global: globalRes.data,
      corpInfor: corpRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
  };
};

export default MyApp;
