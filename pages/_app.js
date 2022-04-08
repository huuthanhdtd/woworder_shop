import App from 'next/app';
import Head from 'next/head';
import '../assets/css/style.css';
import '../assets/css/slick.css';
import { createContext } from 'react';
import { fetchAPI } from '../lib/api';
import { getStrapiMedia } from '../lib/media';
import Layout from '../components/layout';

// Store Tpcapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global, corpInfor } = pageProps;
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Layout corpInfor={corpInfor}>
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

  const [globalRes, corpRes] = await Promise.all([
    fetchAPI('/global', {
      populate: {
        favicon: '*',
        defaultSeo: {
          populate: '*',
        },
      },
    }),
    fetchAPI('/corp-infor'),
  ]);

  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: { global: globalRes.data, corpInfor: corpRes.data },
  };
};

export default MyApp;
