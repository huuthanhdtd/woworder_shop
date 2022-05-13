import { withWidth } from '@material-ui/core';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Parallax } from 'react-parallax';
import styles from './test.module.scss';

export default function Test({ item }) {
  return (
    <>
      {item.attributes.image.data.attributes.url !== null ? (
        <div className={styles.mrb8}>
          <div className={styles.page2}>
            <h3 data-aos="fade-down" data-aos-duration="400" data-deylay="500">
              {item.attributes.name}
            </h3>
            <div className={styles.page2_about}>
              <div className={styles.mrb10}></div>
              <ReactMarkdown
                data-aos="fade-up"
                data-aos-duration="500"
                data-deylay="500"
                source={item.attributes.content}
                escapeHtml={false}
              />
              <div className={styles.mrb10}></div>
            </div>
          </div>
          <div className={styles.section}>
            <Parallax
              bgImage={
                `${
                  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
                  'http://localhost:1337'
                }` + item.attributes.image.data.attributes.formats.large.url
              }
              strength={300}
              className={styles.image}
            ></Parallax>
          </div>
        </div>
      ) : (
        <div className={styles.more}>
          <h3 data-aos="fade-down" data-aos-duration="400" data-deylay="500">
            {item.attributes.name}
          </h3>
          <ReactMarkdown
            data-aos="fade-up"
            data-aos-duration="500"
            data-deylay="500"
            source={item.attributes.content}
            escapeHtml={false}
          />
        </div>
      )}
    </>
  );
}
