import React, { useEffect } from 'react';
import Slider from 'react-slick';
import styles from './slick.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Aos from 'aos';
import Image from './image';

export default function PauseOnHover({ company }) {
  var settings = {
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
          slidesToShow: 2,
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
      <Slider {...settings} className={styles.slickactive}>
        {company &&
          company.map(
            (data, index) => (
              console.log(data),
              (
                <div key={index}>
                  <div className={styles.carousel}>
                    <h5>{data.attributes.title}</h5>
                    <div className={styles.title}>
                      <Image image={data.attributes.image} />
                      <span></span>
                    </div>
                  </div>
                </div>
              )
            )
          )}
      </Slider>
    </div>
  );
}
