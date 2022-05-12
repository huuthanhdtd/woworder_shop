import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Parallax } from 'react-parallax';
import styles from './imgPage2.module.scss';

export default function ImgPage2({ category, introductoryArticle }) {
  console.log('tnsm', introductoryArticle);
  return (
    <>
      {category
        .filter((item) => item.attributes.slug === 'tam-nhin-su-menh')
        .map((data, index) => (
          <div className={styles.mrb8} key={index}>
            <div className={styles.page2}>
              <h2
                data-aos="fade-down"
                data-aos-duration="400"
                data-deylay="500"
              >
                {data.attributes.name}
              </h2>
              <div className={styles.page2_about}>
                <div className={styles.mrb10}></div>
                {introductoryArticle
                  .filter((item) => item.attributes.title === 'tầm nhìn')
                  .map((data, index) => (
                    <div
                      data-aos="fade-right"
                      data-aos-duration="500"
                      data-deylay="500"
                      className={styles.vision}
                      key={index}
                    >
                      <h3>{data.attributes.title}</h3>
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
                      <h3>{data.attributes.title}</h3>
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
            <div className={styles.section}>
              <Parallax
                bgImage="/Banner/banner.jpg"
                strength={300}
                className={styles.image}
              ></Parallax>
            </div>
          </div>
        ))}
    </>
  );
}
