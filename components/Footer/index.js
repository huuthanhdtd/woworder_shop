import React from "react"
import FooterBottom from "./FooterBottom"
import FooterTop from "./FooterTop"
import styles from "./styles.module.scss"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FooterTop />
      <FooterBottom />
    </div>
  )
}
export default Footer
