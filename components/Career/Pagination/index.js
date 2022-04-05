import React, { useState } from "react"
import styles from "./styles.module.scss"
import { GrPrevious, GrNext } from "react-icons/gr"
import clsx from "clsx"

const Pagination = ({ articles, setActive, active }) => {
  const handleClickPrev = () => {
    setActive((prev) => {
      if (prev > 1) {
        return prev - 1
      } else return prev
    })
  }
  const handleClickNext = () => {
    setActive((prev) => {
      if (prev < articles.length / 6) {
        return prev + 1
      } else return prev
    })
  }
  const handleClickNum = (index) => {
    setActive(index + 1)
  }
  return (
    <div className={styles.pagination}>
      <div className={styles.prev}>
        <GrPrevious className={styles.icon} onClick={handleClickPrev} />
      </div>

      {articles &&
        articles
          .filter(
            (item, index) =>
              (index + 1) % 6 === 0 || index === articles.length - 1
          )
          .map((item, index) => (
            <div
              onClick={() => handleClickNum(index)}
              key={index}
              className={clsx(styles.num, {
                [styles.active]: active === index + 1,
              })}
            >
              <h3>{index + 1}</h3>
            </div>
          ))}
      <div className={styles.next} onClick={handleClickNext}>
        <GrNext className={styles.icon} />
      </div>
    </div>
  )
}
export default Pagination
