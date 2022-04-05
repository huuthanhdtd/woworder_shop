import React, { useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { Container } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import NewsFilter from "./NewsFilter"
import HotNews from "./HotNews"

function News({ articles }) {
  return (
    <div className={styles.newInfor}>
      <Container maxWidth="lg">
        <div className={styles.newsTitle}>
          <h1>Thông tin mới</h1>
          <div className={styles.newsLine}></div>
        </div>
        <div className={styles.newsContent}>
          <Grid container spacing={1} className={styles.inForList}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <HotNews articles={articles} />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <NewsFilter articles={articles} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default News
