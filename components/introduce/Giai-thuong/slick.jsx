import React, { useEffect } from 'react';
import Slider from 'react-slick';
import styles from './slick.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Aos from 'aos';
import Image from '../image';

export default function PauseOnHover({ company }) {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          width: '720px',
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings2 = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          width: '720px',
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, []);

  return (
    <div
      className={styles.slider}
      data-aos="fade-up"
      data-aos-duration="500"
      data-delay="500"
    >
      {company.length > 3 ? (
        <Slider {...settings} className={styles.slickactive}>
          {company &&
            company.map((data, index) => (
              <div key={index} className={styles.active}>
                <div className={styles.carousel}>
                  <h5>{data.attributes.title}</h5>
                  <div className={styles.title}>
                    <Image image={data.attributes.image} />
                    <span>{data.attributes.content}</span>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      ) : (
        <Slider {...settings2} className={styles.slickactive}>
          {company &&
            company.map((data, index) => (
              <div key={index} className={styles.active}>
                <div className={styles.carousel}>
                  <h5>{data.attributes.title}</h5>
                  <div className={styles.title}>
                    <Image image={data.attributes.image} />
                    <span>{data.attributes.content}</span>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      )}
    </div>
  );
}
