import React from "react"
import styles from "./intro.module.scss"
export default function Intro() {
  return (
    <div className={styles.page}>
      <h1>Giới thiệu chung</h1>
      <div className={styles.MainIntroduction}>
        <div className={styles.CompanyProfile}>
          <p>
            <strong>sơ lượt về công ty</strong>
          </p>
          <p>
            NovaGroup hướng đến Tầm nhìn: là Tập đoàn đầu tư và phát triển kinh
            tế hàng đầu Việt Nam. Hoạt động trong các lĩnh vực: Dịch vụ - Công
            nghệ - Công nghiệp.
          </p>
        </div>
        <div className={styles.ImgCompany}>
          <img
            src="https://www.novaland.com.vn/Data/Sites/1/media/gioi-thieu/a1.jpg"
            width="100%"
          />
        </div>
      </div>
      <div>
        <img
          src="https://www.novaland.com.vn/Data/Sites/1/News/20/gioithieu-1.jpg"
          width="100%"
        />
      </div>
    </div>
  )
}
