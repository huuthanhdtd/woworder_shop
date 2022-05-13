import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Parallax } from 'react-parallax';
import styles from './imgPage2.module.scss';

export default function ImgPage2({ item, introductoryArticle }) {
  return (
    <>
      {item && (
        <div className={styles.mrb8}>
          <div className={styles.page2}>
            <h2 data-aos="fade-down" data-aos-duration="400" data-deylay="500">
              {item.attributes.name}
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
              bgImage={
                `${
                  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
                  'http://localhost:1337'
                }` + item.attributes.image.data.attributes.formats.lg.url
              }
              strength={300}
              className={styles.image}
            ></Parallax>
          </div>
        </div>
      )}
    </>
  );
}
