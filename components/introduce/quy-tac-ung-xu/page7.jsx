import { Grid } from "@material-ui/core"
import React from "react"
import Link from "next/link"
import styles from "./page7.module.scss"

export default function Page7() {
  return (
    <div className={styles.rule}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={2}>
          <Link href="/">
            <img
              src="https://www.novaland.com.vn/Data/Sites/1/media/Default/icon_qtux.png"
              alt=""
            />
          </Link>
        </Grid>
        <Grid item sm={12} md={12} lg={10}>
          <p>
            Mỗi một doanh nghiệp đều có một nét văn hoá riêng. Tại Novaland,
            HĐQT và Ban Điều hành có trách nhiệm chăm lo cho nhân viên. Từng
            nhân viên có trách nhiệm chăm lo cho khách hàng thể hiện qua sản
            phẩm và dịch vụ khách hàng. Novaland là một đội ngũ chuyên nghiệp có
            tính nhất quán cao. Mọi ứng xử đều phải theo quy tắc ứng xử. Mọi
            người đều có quyền tự do của mình nhưng không được làm ảnh hưởng đến
            người khác.{" "}
          </p>
        </Grid>
      </Grid>
    </div>
  )
}
