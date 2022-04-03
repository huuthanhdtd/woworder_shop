import React from "react"
import PauseOnHover from "./slick"
import styles from "./page6.module.scss"

export default function Page6() {
  return (
    <div className={styles.page6}>
      <h2>GIẢI THƯỞNG</h2>
      <p>
        Những thành tựu của Tập đoàn Novaland được ghi nhận và vinh danh qua
        nhiều giải thưởng và danh hiệu uy tín trong và ngoài nước, thể hiện nỗ
        lực không ngừng của Tập đoàn trong việc tạo ra những sản phẩm chất lượng
        tốt. Quy hoạch tại các vị trí chiến lược, kiến tạo cộng đồng nhân văn
        tiên tiến với môi trường sống tiện nghi, hiện đại cho cư dân, góp phần
        vào sự phát triển bền vững của toàn xã hội.
      </p>
      <PauseOnHover />
      <div>
        <img
          src="https://www.novaland.com.vn/Data/Sites/1/News/24/02-gioithieu.jpg"
          alt=""
          width="100%"
        />
      </div>
    </div>
  )
}
