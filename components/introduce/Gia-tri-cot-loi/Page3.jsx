import React, { useEffect, useMemo } from 'react';
import styles from './page3.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Aos from 'aos';
import ReactMarkdown from 'react-markdown';
import Image from './image';

export default function Page3({ item, parent }) {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, []);
  const rerult = useMemo(() => {
    const rs = parent.reduce((prev, cur) => {
      return prev.find((it) => it.attributes.type === cur.attributes.type)
        ? prev
        : [...prev, cur];
    }, []);
    return rs;
  }, []);
  var settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {item && (
        <div className={styles.page3}>
          <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
            {item.attributes.name}
          </h2>
          <div
            className={styles.page3_about}
            data-aos="fade-down"
            data-aos-duration="500"
            data-delay="500"
          >
            <ReactMarkdown
              data-aos="fade-up-right"
              data-aos-duration="500"
              data-delay="500"
              source={item.attributes.content}
              escapeHtml={false}
            />
          </div>
          {rerult &&
            rerult.map((data, index) => (
              <div className={styles.slider} key={index}>
                <div
                  className={styles.partner}
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  data-delay="500"
                >
                  <span>{data.attributes.type}</span>
                  <br />
                  <br />
                  <Slider {...settings} className={styles.modules}>
                    {parent &&
                      parent
                        .filter(
                          (it) => it.attributes.type === data.attributes.type
                        )
                        .map((d, x) => (
                          <div className={styles.media} key={x}>
                            <div className={styles.module}>
                              <Image image={d.attributes.image} />
                            </div>
                          </div>
                        ))}
                  </Slider>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
