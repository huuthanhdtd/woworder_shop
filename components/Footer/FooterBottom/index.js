import React, { useState } from "react"
import styles from "./styles.module.scss"
import { Container, Grid } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import YouTubeIcon from "@material-ui/icons/YouTube"

function FooterBottom() {
  return (
    <Container maxWidth="lg">
      <div className={styles.footerLast}>
        <Grid className={styles.footerLastContent} item xs={12} sm={8} lg={8}>
          <p>Chính sách bảo mật</p>
          <p>CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NO VA</p>
          <p>
            Giấy chứng nhận đăng ký doanh nghiệp số 0301444753 do Sở Kế hoạch và
            Đầu tư TP.HCM cấp lần đầu ngày 18/09/1992
          </p>
          <p>
            Tòa nhà văn phòng Novaland, 65 Nguyễn Du, P.Bến Nghé, Quận 1, TP.
            HCM - ĐT: (84) 906 35 38 38 - Hotline:1900 63 6666
          </p>
          <p>
            © 2016. Bản quyền thuộc về Tập đoàn Novaland (Việt Nam). Tất cả các
            quyền được bảo hộ.
          </p>
        </Grid>
        <Grid className={styles.footerLastIcon} item xs={12} sm={4} lg={4}>
          <span className={styles.footerLastIconTop}>
            <FacebookIcon className={styles.iconFb} />
            <YouTubeIcon className={styles.iconYt} />
          </span>
          <span className={styles.footerLastIconBottom}>
            <img src="https://www.novaland.com.vn/Data/Sites/1/media/Default/logosalenoti-(1).png" />
          </span>
        </Grid>
      </div>
    </Container>
  )
}

export default FooterBottom
