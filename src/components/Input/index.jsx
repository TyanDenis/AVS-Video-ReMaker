import React from "react"
import styles from "./Input.module.scss"

function Input({ children, className, ...props }) {
  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{children}</span>
      <input className={className} {...props} type="text" />
    </label>
  )
}

export default Input