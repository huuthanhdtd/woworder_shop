import React from 'react';
import Slider from 'react-slick';
import styles from './slick.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PauseOnHover() {
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
          slidesToShow: 2,
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
  const historys = [
    {
      since: '1985',
      history: [
        {
          titles: [
            'Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp',
            'Ra mắt Siêu thành phố biển - Du lịch - Sức khỏe NovaWorld Phan Thiet (TP.Phan Thiết, Bình Thuận) với với quy mô 1.000 ha và tổng mức đầu tư khoảng 5 tỷ đô la Mỹ.',
            'Ra mắt Tổ hợp Du lịch Nghỉ dưỡng Giải trí NovaWorld Ho Tram (Bà Rịa - Vũng Tàu) với quy mô 1.000 ha.',
            'Ra mắt Tổ hợp Du lịch Nghỉ dưỡng Giải trí NovaWorld Ho Tram (Bà Rịa - Vũng Tàu) với quy mô 1.000 ha.',
          ],
          img: 'https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/lich-su-hinh-thanh/2016.jpg',
        },
      ],
    },
    {
      since: '1942',
      history: [
        {
          titles: [
            'NovaGroup thực hiện tái cấu trúc lần 2 - đặt ra các mục tiêu hoạt động & phát triển với Tầm nhìn là ',
            'Tập đoàn đầu tư và phát triển kinh tế hàng đầu Việt Nam. Hoạt động trong các lĩnh vực: Dịch vụ - Công nghệ - Công nghiệp',
            'Trong đó, Tập đoàn Novaland tiếp tục tập trung vào ngành nghề cốt lõi là đầu tư và phát triển các dự án BĐS tại phân khúc trung cao. ',
          ],
          img: 'https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/lich-su-hinh-thanh/2019.jpg',
        },
      ],
    },
    {
      since: '1962',
      history: [
        {
          titles: [
            'Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp',
            'Ngày 18/09/1992, thành lập Công ty TNHH Thương mại Thành Nhơn - tiền thân của NovaGroup - hoạt động trong lĩnh vực sản xuất, nhập khẩu và phân phối các sản phẩm thuốc thú y, thức ăn chăn nuôi, thủy sản… và xây biệt thự cho thuê.',
          ],
          img: 'https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/lich-su-hinh-thanh/2018.jpg',
        },
      ],
    },
    {
      since: '1994',
      history: [
        {
          titles: [
            'Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp',
            'NovaWorld Phan Thiet hoàn thành cụm sân Golf PGA NovaWorld Phan Thiet 36 hố.',
            'NovaWorld Ho Tram ra mắt phân kỳ Morito, Binh Chau Onsen, đưa vào vận hành Giai đoạn 1 của phân kỳ The Tropicana.',
            'Aqua City  khánh thành tổ hợp quảng trường - bến du thuyền Aqua Marina, ra mắt phân khu Sun Harbor 1.',
          ],
          img: 'https://img.vn/uploads/thuvien/sh-moi-1-jpg-20211126133835ma0oxIeHGV.jpg',
        },
      ],
    },
    {
      since: '1998',
      history: [
        {
          titles: [
            'Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp',
            'Niêm yết trái phiếu chuyển đổi trên Sở Giao dịch Chứng khoán Singapore lần đầu.',
            'Khai trương khu nghỉ dưỡng đầu tiên – Azerai Can Tho Resort (TP.Cần Thơ).',
          ],
          img: 'https://img.vn/uploads/thuvien/sh-moi-1-jpg-20211126133835ma0oxIeHGV.jpg',
        },
      ],
    },
  ];
  return (
    <div className={styles.slider}>
      <Slider {...settings} className={styles.slickactive}>
        {historys &&
          historys.map((data, index) => (
            <>
              <div className={styles.carousel} key={index}>
                <h5>{data.since}</h5>
                {historys[index].history &&
                  historys[index].history.map((e, i) => (
                    <div key={i} className={styles.title}>
                      {e.titles &&
                        e.titles.map((item, v) => (
                          <>
                            <p key={v}>{item}</p>
                          </>
                        ))}
                      <img src={e.img} />
                    </div>
                  ))}
              </div>
            </>
          ))}
      </Slider>
    </div>
  );
}
