import React, { useEffect } from 'react';
import Slider from 'react-slick';
import styles from './slick.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Aos from 'aos';
import Image from './image';

export default function PauseOnHover({ company }) {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, []);
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className={styles.slider}
      data-aos="fade-down"
      data-aos-duration="500"
      data-delay="500"
    >
      <Slider {...settings} className={styles.slickactive}>
        {company &&
          company.map((data, index) => (
            <div key={index}>
              <div className={styles.carousel}>
                <h5>{data.attributes.title}</h5>
                <div className={styles.title}>
                  <Image image={data.attributes.image} />
                  <div>
                    <p>{data.attributes.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
