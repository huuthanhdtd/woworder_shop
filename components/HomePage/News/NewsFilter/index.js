import React, { useEffect, useState } from "react"
import clsx from "clsx"
import styles from "./styles.module.scss"
import { Grid } from "@material-ui/core"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import Link from "next/link"

function NewsMarket({ articles }) {
  const [activeIndex, setactiveIndex] = useState(0)
  const [news, setNews] = useState(
    articles.filter(
      (item, index) => item.attributes.image.data !== null && index < 3
    )
  )
  const btns = ["THÔNG TIN THỊ TRƯỜNG", "TIN TỨC"]
  const handleChangList = (index) => {
    setactiveIndex(index)
  }
  return (
    <div className={styles.newsFilter}>
      <div className={styles.newsFilterWrapper}>
        <div className={styles.filters}>
          {btns.map((btn, index) => (
            <span
              key={index}
              className={clsx({
                [styles.active]: activeIndex === Number(index),
              })}
              onClick={() => handleChangList(index)}
            >
              <h3>{btn}</h3>
            </span>
          ))}
        </div>
        <div className={styles.newsList}>
          {news &&
            news.map((item, index) => (
              <div key={index} className={styles.content}>
                <div className={styles.times}>
                  <AccessTimeIcon style={{ fontSize: 20 }} />
                  <h3>
                    {new Intl.DateTimeFormat("en-GB").format(
                      new Date(item.attributes.updatedAt)
                    )}
                  </h3>
                </div>
                <Link href="/">
                  <div className={styles.titleBlock}>
                    <h2>
                      {item.attributes.title}
                      <ArrowRightIcon className={styles.rightIcon} />
                    </h2>
                  </div>
                </Link>
                <h4>{item.attributes.description}</h4>
              </div>
            ))}
        </div>
        <div className={styles.btnShowAll}>
          <h3>XEM TẤT CẢ</h3>
          <ArrowRightIcon className={styles.icon} />
        </div>
      </div>
    </div>
  )
}

export default NewsMarket
