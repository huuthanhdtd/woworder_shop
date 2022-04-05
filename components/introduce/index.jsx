import React from "react"
import Page5 from "./Ban-lanh-dao/Page5"
import Page3 from "./Gia-tri-cot-loi/Page3"
import Page6 from "./Giai-thuong/Page6"
import Intro from "./Introduce/intro"
import Page4 from "./Lich-su-phat-trien/Page4"
import NavIntroduce from "./NavIntro/NavIntroduce"
import Page7 from "./quy-tac-ung-xu/page7"
import Page2 from "./Tamnhin-sumenh/Page2"

export default function Introduce() {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <NavIntroduce />
      <Intro />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </div>
  )
}
