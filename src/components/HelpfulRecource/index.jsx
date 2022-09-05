import React from "react"
import styles from "./HelpfulRecource.module.scss"

function HelpfulRecource({ ...item }) {
  return (
    <div className={styles.item}>
      <div className={styles.img} style={{ backgroundImage: `url(${item.img})` }}></div>
      <div className={styles.title}>
        <span>{item.title} </span>
        <a href={item.linkUrl}>{item.linkText}</a>
      </div>
    </div>
  )
}

export default HelpfulRecource