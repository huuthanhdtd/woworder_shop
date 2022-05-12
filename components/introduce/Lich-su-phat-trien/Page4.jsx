import React, { useEffect, useState } from 'react';
import PauseOnHover from './slick';
import styles from './page4.module.scss';
import Aos from 'aos';

export default function Page6({ category, introductoryArticle }) {
  const [company, setCompany] = useState([]);
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
    const history = introductoryArticle.filter(
      (item) =>
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
      {category
        .filter((item) => item.attributes.slug === 'lich-su-phat-trien')
        .map((data, index) => (
          <div className={styles.page4} key={index}>
            <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
              {data.attributes.name}
            </h2>
            <PauseOnHover company={company} />
            <div className={styles.banner}></div>
          </div>
        ))}
      <div>
        {/* <img
          src="https://www.novaland.com.vn/Data/Sites/1/News/24/02-gioithieu.jpg"
          alt=""
          width="100%"
        /> */}
      </div>
    </>
  );
}
