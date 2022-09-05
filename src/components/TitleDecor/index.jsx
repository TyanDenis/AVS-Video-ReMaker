import React from "react"
import styles from "./TitleDecor.module.scss"
import titleDecorImg from "../../assets/media/img/title-decor.png"

function TitleDecor({ className }) {
  return (
    <h1 className={`${styles.title} ${className}`}>
      AVS Video ReMaker
      <span className={styles['text-decor']}>
        <span style={{ backgroundImage: `url(${titleDecorImg})` }}>Giveaway</span>
      </span>
    </h1>
  )
}

export default TitleDecor