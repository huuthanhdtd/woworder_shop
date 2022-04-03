import React from "react"
import Slider from "react-slick"
import styles from "./slick.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function PauseOnHover() {
  var settings = {
    // infinite: true,
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
  }
  return (
    <div className={styles.slider}>
      <Slider {...settings} className={styles.slickactive}>
        <div className={styles.module}>
          <div className={styles.carousel}>
            <h5>1992</h5>
            <p>
              Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp{" "}
            </p>
            <img src="https://img.vn/uploads/thuvien/sh-moi-1-jpg-20211126133835ma0oxIeHGV.jpg" />
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.carousel}>
            <h5>1992</h5>
            <p>
              Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp{" "}
            </p>
            <img src="https://img.vn/uploads/thuvien/sh-moi-1-jpg-20211126133835ma0oxIeHGV.jpg" />
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.carousel}>
            <h5>1992</h5>
            <p>
              Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp{" "}
            </p>
            <img src="https://img.vn/uploads/thuvien/sh-moi-1-jpg-20211126133835ma0oxIeHGV.jpg" />
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.carousel}>
            <h5>1992</h5>
            <p>
              Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp{" "}
            </p>
            <img src="https://img.vn/uploads/thuvien/sh-moi-1-jpg-20211126133835ma0oxIeHGV.jpg" />
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.carousel}>
            <h5>1992</h5>
            <p>
              Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp{" "}
            </p>
            <img src="https://img.vn/uploads/thuvien/sh-moi-1-jpg-20211126133835ma0oxIeHGV.jpg" />
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.carousel}>
            <h5>1992</h5>
            <p>
              Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp{" "}
            </p>
            <img src="https://img.vn/uploads/thuvien/sh-moi-1-jpg-20211126133835ma0oxIeHGV.jpg" />
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.carousel}>
            <h5>1992</h5>
            <p>
              Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp{" "}
            </p>
            <img src="https://img.vn/uploads/thuvien/sh-moi-1-jpg-20211126133835ma0oxIeHGV.jpg" />
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.carousel}>
            <h5>1992</h5>
            <p>
              Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp{" "}
            </p>
            <img src="https://img.vn/uploads/thuvien/sh-moi-1-jpg-20211126133835ma0oxIeHGV.jpg" />
          </div>
        </div>
        <div className={styles.module}>
          <div className={styles.carousel}>
            <h5>1992</h5>
            <p>
              Tập đoàn Novaland giới thiệu dự án đầu tiên – Khu phức hợp cao cấp{" "}
            </p>
            <img src="https://img.vn/uploads/thuvien/sh-moi-1-jpg-20211126133835ma0oxIeHGV.jpg" />
          </div>
        </div>
      </Slider>
    </div>
  )
}
