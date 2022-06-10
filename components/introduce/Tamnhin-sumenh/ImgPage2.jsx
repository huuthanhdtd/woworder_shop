import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Parallax } from 'react-parallax';
import { useWindowSize } from 'react-use';
import { getMediaFollowSize } from '../../../lib/media';
import styles from './imgPage2.module.scss';

export default function ImgPage2({ item, introductoryArticle }) {
  const { width } = useWindowSize();
  const [urlImage, setUrlImage] = useState();
  useEffect(() => {
    if (item && item.attributes.image && item.attributes.image.data) {
      let image = item.attributes.image;
      if (width) {
        if (width > 2600) {
          setUrlImage(image.data.attributes);
        }
        if (width <= 2600) {
          if (image.data?.attributes.formats?.xl === undefined) {
            setUrlImage(image.data.attributes);
          } else {
            setUrlImage(image.data.attributes.formats.xl);
          }
        }
        if (width <= 1900) {
          if (image.data?.attributes.formats?.lg === undefined) {
            setUrlImage(image.data.attributes);
          } else {
            setUrlImage(image.data.attributes.formats.lg);
          }
        }
        if (width <= 1280) {
          if (image.data?.attributes.formats?.md === undefined) {
            setUrlImage(image.data.attributes);
          } else {
            setUrlImage(image.data.attributes.formats.md);
          }
        }
        if (width <= 960) {
          if (image.data?.attributes.formats?.sm === undefined) {
            setUrlImage(image.data.attributes);
          } else {
            setUrlImage(image.data.attributes.formats.sm);
          }
        }
        if (width <= 600) {
          if (image.data?.attributes.formats?.xs === undefined) {
            setUrlImage(image.data.attributes);
          } else {
            setUrlImage(image.data.attributes.formats.xs);
          }
        }
      }
    }
  }, [width]);
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
              bgImage={urlImage ? getMediaFollowSize(urlImage) : 'error.svg'}
              strength={300}
              className={styles.image}
            ></Parallax>
          </div>
        </div>
      )}
    </>
  );
}
