import React from "react"
import styles from "./Projects.module.scss"
import Banner from "../Banner/Banner"

function LayoutProject({ children }) {
  return (
    <div className={styles.layout}>
      <Banner />
      {children}
    </div>
  )
}

export default LayoutProject
