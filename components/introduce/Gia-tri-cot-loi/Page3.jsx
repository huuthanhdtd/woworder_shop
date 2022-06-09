import React, { useEffect, useMemo, useState } from 'react';
import styles from './page3.module.scss';
import Aos from 'aos';
import ReactMarkdown from 'react-markdown';
import Image from '../image';
import Slider from 'react-slick';

export default function Page3({ item, parent }) {
  // const rerult = useMemo(() => {
  //   const rs = parent.reduce((prev, cur) => {
  //     return prev.find((it) => it.attributes.type === cur.attributes.type)
  //       ? prev
  //       : [...prev, cur];
  //   }, []);
  //   return rs;
  // }, []);
  const [sliders, setSliders] = useState([]);
  const [sliderss, setSliderss] = useState([]);
  const [slidersss, setSlidersss] = useState([]);
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
    const fil1 = parent.filter(
      (item) => item.attributes.type === 'strategic partnership'
    );
    const rs1 = fil1.sort(function (a, b) {
      return (
        parseInt(a.attributes.priority, 10) -
        parseInt(b.attributes.priority, 10)
      );
    });
    setSliders(rs1);
    const fil2 = parent.filter(
      (item) => item.attributes.type === 'bank partner'
    );
    const rs2 = fil2.sort(function (a, b) {
      return (
        parseInt(a.attributes.priority, 10) -
        parseInt(b.attributes.priority, 10)
      );
    });
    setSliderss(rs2);
    const fil3 = parent.filter(
      (item) => item.attributes.type === 'construction partner'
    );
    const rs3 = fil3.sort(function (a, b) {
      return (
        parseInt(a.attributes.priority, 10) -
        parseInt(b.attributes.priority, 10)
      );
    });
    setSlidersss(rs3);
  }, []);
  var settings = {
    infinite: true,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  var settings2 = {
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
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      {item && (
        <div className={styles.page3}>
          <h2 data-aos="fade-down" data-aos-duration="500">
            {item.attributes.name}
          </h2>
          <div
            className={styles.page3_about}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <ReactMarkdown
              data-aos="fade-up-right"
              data-aos-duration="500"
              source={item.attributes.content}
              escapeHtml={false}
            />
          </div>
          <div className={styles.slider}>
            <div
              className={styles.partner}
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <div className={styles.slider}>
                <div
                  className={styles.partner}
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  style={{ borderBottom: '1px solid gray' }}
                >
                  <span>Đối Tác Chiến Lược</span>
                  {sliders.length > 4 ? (
                    <Slider {...settings} className={styles.modules}>
                      {sliders &&
                        sliders.map((data, index) => (
                          <div className={styles.media} key={index}>
                            <div className={styles.module}>
                              <Image image={data.attributes.image} />
                            </div>
                          </div>
                        ))}
                    </Slider>
                  ) : (
                    <Slider {...settings2} className={styles.modules}>
                      {sliders &&
                        sliders.map((data, index) => (
                          <div className={styles.media} key={index}>
                            <div className={styles.module}>
                              <Image image={data.attributes.image} />
                            </div>
                          </div>
                        ))}
                    </Slider>
                  )}
                </div>
              </div>
              <div className={styles.slider}>
                <div
                  className={styles.partner}
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  style={{ borderBottom: '1px solid gray' }}
                >
                  <span>Đối Tác Ngân Hàng</span>
                  {sliderss.length > 4 ? (
                    <Slider {...settings} className={styles.modules}>
                      {sliderss &&
                        sliderss.map((data, index) => (
                          <div className={styles.media} key={index}>
                            <div className={styles.module}>
                              <Image image={data.attributes.image} />
                            </div>
                          </div>
                        ))}
                    </Slider>
                  ) : (
                    <Slider {...settings2} className={styles.modules}>
                      {sliderss &&
                        sliderss.map((data, index) => (
                          <div className={styles.media} key={index}>
                            <div className={styles.module}>
                              <Image image={data.attributes.image} />
                            </div>
                          </div>
                        ))}
                    </Slider>
                  )}
                </div>
              </div>
              <div className={styles.slider}>
                <div
                  className={styles.partner}
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  style={{ borderBottom: '1px solid gray' }}
                >
                  <span>Đối Tác Xây Dựng</span>
                  {slidersss.length > 4 ? (
                    <Slider {...settings} className={styles.modules}>
                      {slidersss &&
                        slidersss.map((data, index) => (
                          <div className={styles.media} key={index}>
                            <div className={styles.module}>
                              <Image image={data.attributes.image} />
                            </div>
                          </div>
                        ))}
                    </Slider>
                  ) : (
                    <Slider {...settings2} className={styles.modules}>
                      {slidersss &&
                        slidersss.map((data, index) => (
                          <div className={styles.media} key={index}>
                            <div className={styles.module}>
                              <Image image={data.attributes.image} />
                            </div>
                          </div>
                        ))}
                    </Slider>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
