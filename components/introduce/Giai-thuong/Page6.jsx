import React, { useEffect, useState } from 'react';
import PauseOnHover from './slick';
import styles from './page6.module.scss';
import Aos from 'aos';
import ReactMarkdown from 'react-markdown';

export default function Page6({ item, introductoryArticle }) {
  const [company, setCompany] = useState([]);
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
    });
    const history = introductoryArticle.filter(
      (item) =>
        item.attributes.category.data !== null &&
        item.attributes.category.data.attributes.name === 'Giải thưởng'
    );
    const rs = history.sort(function (a, b) {
      return (
        parseInt(a.attributes.category.data.attributes.priority, 10) -
        parseInt(b.attributes.category.data.attributes.priority, 10)
      );
    });
    setCompany(rs);
  }, []);
  return (
    <>
      {item && (
        <div className={styles.page6}>
          <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
            {item.attributes.name}
          </h2>
          <ReactMarkdown
            data-aos="fade-down"
            data-aos-duration="500"
            data-delay="500"
            source={item.attributes.content}
            escapeHtml={false}
          />
          <PauseOnHover company={company} />
          <div></div>
        </div>
      )}
    </>
  );
}
