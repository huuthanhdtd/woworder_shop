import Link from 'next/link';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
import navBar from '../constants/navsBar.json';
import { useMemo } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Typography } from '@material-ui/core';

const NotFound = ({ category }) => {
  const seo = {
    metaTitle: 'Not Found',
  };
  const styles = {
    container: {
      height: ' 80vh',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    desc: { color: 'var(--primary-color-)' },
    link: { cursor: 'pointer', color: 'var(--hover-color-)' },
    icon: {
      color: 'var(--hover-color-)',
      fontSize: '25px',
      marginRight: 5,
    },
  };

  /* @@ Add categories to NavBar.json */

  // let newArray = [];
  // newArray = category.map((item) => ({
  //   title: item.attributes.name,
  //   link: item.attributes.link,
  //   slug: item.attributes.slug,
  //   priority: item.attributes.priority,
  // }));

  // const rs = useMemo(() => {
  //   const rr = navBar;
  //   rr.find((item) => item.title === 'giới thiệu').list = newArray;
  //   return rr;
  // }, []);
  // console.log(category.map((item) => ({ slug: item.attributes.name })));
  return (
    <>
      <Seo seo={seo} />
      <div style={styles.container}>
        <h3 style={styles.desc}>404 | Không tìm thấy trang này.</h3>
        <Link href="/">
          <Typography style={styles.link}>
            <BsFillArrowLeftCircleFill style={styles.icon} />
            Trang chủ
          </Typography>
        </Link>
      </div>
    </>
  );
};

// export const getStaticProps = async () => {
//   const categoryRes = await fetchAPI('/categories', { populate: '*' });
//   return {
//     props: {
//       category: categoryRes.data,
//     },
//     revalidate: 1,
//   };
// };

export default NotFound;
