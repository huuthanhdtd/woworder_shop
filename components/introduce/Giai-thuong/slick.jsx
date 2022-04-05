import React from "react"
import Slider from "react-slick"
import styles from "./slick.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
          width: "720px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const gifts = [
    {
      since: "1992",
      gift: [
        {
          img: "https://www.novaland.com.vn/Data/Sites/1/media/giai-thuong/giai-thuong/vietnam-property.jpg",
          title:
            "Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp",
        },
      ],
    },
    {
      since: "1993",
      gift: [
        {
          img: "https://www.novaland.com.vn/Data/Sites/1/media/giai-thuong/giai-thuong/tuyen-dung-asia.jpg",
          title:
            "Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp",
        },
      ],
    },
    {
      since: "1994",
      gift: [
        {
          img: "https://www.novaland.com.vn/Data/Sites/1/media/giai-thuong/giai-thuong/2012.jpg",
          title:
            "Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp",
        },
      ],
    },
    {
      since: "1995",
      gift: [
        {
          img: "https://www.novaland.com.vn/Data/Sites/1/media/giai-thuong/giai-thuong/2019/cup-well_known1.png",
          title:
            "Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp",
        },
      ],
    },
    {
      since: "1996",
      gift: [
        {
          img: "https://www.novaland.com.vn/Data/Sites/1/media/giai-thuong/giai-thuong/topten.jpg",
          title:
            "Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp",
        },
      ],
    },
    {
      since: "1997",
      gift: [
        {
          img: "https://www.novaland.com.vn/Data/Sites/1/media/giai-thuong/giai-thuong/2020/giai-thuong-01.jpg",
          title:
            "Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp",
        },
      ],
    },
    {
      since: "1998",
      gift: [
        {
          img: "https://www.novaland.com.vn/Data/Sites/1/media/giai-thuong/giai-thuong/2019/awards---propertyguru_rz.jpg",
          title:
            "Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp",
        },
      ],
    },
    {
      since: "1999",
      gift: [
        {
          img: "https://www.novaland.com.vn/Data/Sites/1/media/giai-thuong/giai-thuong/choice-braand.jpg",
          title:
            "Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp",
        },
      ],
    },
    {
      since: "2000",
      gift: [
        {
          img: "https://www.novaland.com.vn/Data/Sites/1/media/giai-thuong/giai-thuong/2020/health-promotion-category---area-2020.jpg",
          title:
            "NovaGroup thực hiện tái cấu trúc lần 2 - đặt ra các mục tiêu hoạt động & phát triển với Tầm nhìn là ",
        },
        {
          img: "https://www.novaland.com.vn/Data/Sites/1/media/giai-thuong/giai-thuong/asia-respon.jpg",
          title: "Tập đoàn Novaland giới thiệu dự án đầu tiên ",
        },
      ],
    },
  ]
  return (
    <div className={styles.slider}>
      <Slider {...settings} className={styles.slickactive}>
        {gifts &&
          gifts.map((data, index) => (
            <>
              <div className={styles.carousel} key={index}>
                <h5>{data.since}</h5>
                {gifts[index].gift &&
                  gifts[index].gift.map((e, i) => (
                    <div key={i} className={styles.title}>
                      <img src={e.img} />
                      <span>{e.title}</span>
                    </div>
                  ))}
              </div>
            </>
          ))}
      </Slider>
    </div>
  )
}
