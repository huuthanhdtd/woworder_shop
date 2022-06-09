import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Parallax } from 'react-parallax';
import { api } from '../api';
import styles from './test.module.scss';
import Aos from 'aos';
import Slider from 'react-slick';

export default function Test({ item, slug, introductoryArticle }) {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    const ex = introductoryArticle.filter(
      (item) => item.attributes.category.data.attributes.slug === slug
    );
    setfirst(ex);
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, []);
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          infinite: true,
          width: '720px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {item.attributes.image.data.attributes.formats.sm.url !== undefined ? (
        <div className={styles.mrb8}>
          <div
            className={styles.slider}
            data-aos="fade-up"
            data-aos-duration="500"
            style={{ color: '#fff' }}
          >
            <h3>{item.attributes.name}</h3>

            <Slider {...settings} className={styles.slickactive}>
              {first &&
                first.map((data, index) => (
                  <div key={index} className={styles.actives}>
                    <div className={styles.page_title}>
                      {data.attributes.title}
                    </div>
                    <div>
                      <ReactMarkdown
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-deylay="500"
                        source={data.attributes.content}
                        escapeHtml={false}
                      />
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
          <div className={styles.section}>
            <Parallax
              bgImage={
                `${api}` + item.attributes.image.data.attributes.formats.md.url
              }
              strength={300}
              bgImageStyle={{
                width: `${item.attributes.image.data.attributes.formats.md.width}`,
                height: `${item.attributes.image.data.attributes.formats.md.height}`,
              }}
              className={styles.image}
            ></Parallax>
          </div>
        </div>
      ) : (
        <div className={styles.hai}>
          <div
            className={styles.more}
            data-aos="fade-up"
            data-aos-duration="500"
            style={{ color: '#000' }}
          >
            <h3>{item.attributes.name}</h3>

            <Slider {...settings} className={styles.slickactive}>
              {first &&
                first.map((data, index) => (
                  <div key={index} className={styles.actives}>
                    <div className={styles.page_title}>
                      {data.attributes.title}
                    </div>
                    <div>
                      <ReactMarkdown
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-deylay="500"
                        source={data.attributes.content}
                        escapeHtml={false}
                      />
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}
