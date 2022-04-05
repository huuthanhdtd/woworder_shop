import React from "react"
import News from "../../components/HomePage/News"
import Slider from "../../components/HomePage/Slider"
import Projects from "../../components/HomePage/Projects"

import styles from "./styles.module.scss"

const HomePage = ({ articles, categories, slides, projects, homepage }) => {
  return (
    <div className={styles.homePage}>
      <Slider slides={slides} projects={projects} articles={articles} />
      <News articles={articles} />
      <Projects />
    </div>
  )
}
export default HomePage
