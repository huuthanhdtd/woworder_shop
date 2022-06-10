import React, { useEffect, useState } from 'react';
import styles from './Page2.module.scss';
import Aos from 'aos';
import ReactMarkdown from 'react-markdown';
import { useWindowSize } from 'react-use';
import { getMediaFollowSize } from '../../../lib/media';

export default function Page2({ item, introductoryArticle }) {
  const { width } = useWindowSize();
  const [urlImage, setUrlImage] = useState(
    item.attributes.image.data?.attributes
  );
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
    if (item && item.attributes.image && item.attributes.image.data) {
      let image = item.attributes.image;
      if (width) {
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
        <div className={styles.page2}>
          <h2 data-aos="fade-down" data-aos-duration="700">
            {item.attributes.name}
          </h2>
          <div className={styles.page2_about}>
            <div className={styles.mrb10}></div>
            {introductoryArticle
              .filter((item) => item.attributes.title === 'tầm nhìn')
              .map((data, index) => (
                <div
                  data-aos="fade-right"
                  data-aos-duration="700"
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
      )}
      <div
        className={styles.parallax}
        style={{
          backgroundImage: urlImage
            ? `url(${getMediaFollowSize(urlImage)})`
            : 'url("error.svg")',
          backgroundSize: 'contain',
          width: '100%',
          height: '100%',
        }}
      ></div>
    </>
  );
}
