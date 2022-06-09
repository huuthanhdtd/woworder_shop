import React, { useEffect, useState } from 'react';
import PauseOnHover from './slick';
import styles from './page4.module.scss';
import Aos from 'aos';

export default function Page6({ item, introductoryArticle }) {
  const [company, setCompany] = useState([]);
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
    const history = introductoryArticle.filter(
      (item) =>
        item.attributes.category.data !== null &&
        item.attributes.category.data.attributes.name === 'Lịch sử phát triển'
    );
    const rs = history.sort(function (a, b) {
      return (
        parseInt(a.attributes.title, 10) - parseInt(b.attributes.title, 10)
      );
    });
    setCompany(rs);
  }, []);
  return (
    <>
      {item && (
        <div className={styles.page4}>
          <h2 data-aos="fade-down" data-aos-duration="500">
            {item.attributes.name}
          </h2>
          <PauseOnHover company={company} />
          <div className={styles.banner}></div>
        </div>
      )}
    </>
  );
}
