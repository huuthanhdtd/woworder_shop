import React, { useEffect } from 'react';
import styles from './page3.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Aos from 'aos';

export default function Page3() {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
      offset: 0,
    });
  }, []);

  const partner = [
    {
      partners: 'ĐỐI TÁC CHIẾN LƯỢC',
      image: [
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Anabuki.svg',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Meldia.jpg',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/G7.svg',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Kien-Vang-01.png',
      ],
    },
    {
      partners: 'ĐỐI TÁC XÂY DỰNG',
      image: [
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Logo-Savills.svg',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Logo-Cbre.svg',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Bwpc-Logo-Template.png',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Logo-Welham.svg',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Screen-Shot-2021-01-22-At-16_59_53.png',
      ],
    },
    {
      partners: 'ĐỐI TÁC NGÂN HÀNG',
      image: [
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Logo-Pvcombank.png',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Vp-Bank.svg',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Hd-Bank-01.png',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Bidv.png',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/025-Logo-Png-File-Nganhang-Tp-Bank.png',
        'https://danhkhoi.com.vn/static/upload/images/Logo-Doi-Tac/Vietcombank-01.png',
      ],
    },
  ];
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
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.page3}>
      <h2 data-aos="fade-down" data-aos-duration="500" data-delay="500">
        Đối Tác
      </h2>
      <div
        className={styles.page3_about}
        data-aos="fade-down"
        data-aos-duration="500"
        data-delay="500"
      >
        <h3 data-aos="fade-up-right" data-aos-duration="500" data-delay="500">
          HIỆU QUẢ - CHÍNH TRỰC - CHUYÊN NGHIỆP
        </h3>
      </div>
      <div className={styles.slider}>
        <p data-aos="fade-up" data-aos-duration="500" data-delay="500">
          Cùng với năng lực và uy tín, Tập đoàn Danh Khôi đã xây dựng mối quan
          hệ hợp tác chiến lược lâu dài và bền vững với các đối tác hàng đầu,
          mang lại những sản phẩm chuẩn mực, dịch vụ chất lượng và hiệu quả
          chuyên nghiệp.
        </p>
        {partner &&
          partner.map((data, index) => (
            <div
              className={styles.partner}
              key={index}
              data-aos="zoom-in"
              data-aos-duration="900"
              data-delay="500"
            >
              <span>{data.partners}</span>
              <br />
              <br />
              <Slider {...settings} className={styles.modules}>
                {partner[index].image &&
                  partner[index].image.map((item, i) => (
                    <div className={styles.media} key={i}>
                      <div className={styles.module}>
                        <img src={item} alt="" />
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          ))}
      </div>
    </div>
  );
}
