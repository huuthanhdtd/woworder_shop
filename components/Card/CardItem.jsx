import Link from "next/link"
import NextImage from "../image"
import React from "react"
import styles from "./CardItem.module.scss"
import { ArrowRight } from "@material-ui/icons"
import { Button, Divider, Typography } from "@material-ui/core"

function CardItem({ article }) {
  return (
    <Link href={`/bai-viet/${article.attributes.slug}`}>
      <div className={styles.container}>
        <NextImage image={article.attributes.image} />
        <div className={styles.content}>
          <Typography variant="h5">{article.attributes.title}</Typography>
          <Typography variant="body2">{article.attributes.address}</Typography>
          <Divider className={styles.divider} />
          <Typography variant="body2">{`${article.attributes.description.slice(
            0,
            article.attributes.description.slice(0, 150).lastIndexOf(" ")
          )}...`}</Typography>
          <Button className={styles.button}>
            <ArrowRight fontSize="small" className={styles.icon} /> Xem thêm
          </Button>
        </div>
      </div>
    </Link>
  )
}

export default CardItem
