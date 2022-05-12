import React, { useEffect } from 'react';
import styles from './Page2.module.scss';
import Aos from 'aos';
import ReactMarkdown from 'react-markdown';

export default function Page2({ category, introductoryArticle }) {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, []);
  return (
    <>
      {category
        .filter((item) => item.attributes.slug === 'tam-nhin-su-menh')
        .map((data, index) => (
          <div className={styles.page2} key={index}>
            <h2 data-aos="fade-down" data-aos-duration="700" data-delay="500">
              {data.attributes.name}
            </h2>
            <div className={styles.page2_about}>
              <div className={styles.mrb10}></div>
              {introductoryArticle
                .filter((item) => item.attributes.title === 'tầm nhìn')
                .map((data, index) => (
                  <div
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-delay="500"
                    className={styles.vision}
                    key={index}
                  >
                    <p>
                      <span>{data.attributes.title}</span>
                    </p>
                    <hr />

                    <ReactMarkdown
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-deylay="500"
                      source={data.attributes.content}
                      escapeHtml={false}
                    />
                  </div>
                ))}
              {introductoryArticle
                .filter((item) => item.attributes.title === 'Sứ mệnh')
                .map((data, index) => (
                  <div
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-delay="500"
                    className={styles.mission}
                    key={index}
                  >
                    <p>
                      <span>{data.attributes.title}</span>
                    </p>
                    <hr />
                    <ReactMarkdown
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-deylay="500"
                      source={data.attributes.content}
                      escapeHtml={false}
                    />
                  </div>
                ))}
              <div className={styles.mrb10}></div>
            </div>
          </div>
        ))}
      <div className={styles.parallax}></div>
    </>
  );
}
