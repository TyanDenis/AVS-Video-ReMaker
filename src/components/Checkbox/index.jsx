import React from "react"
import styles from "./Checkbox.module.scss"

function Checkbox({ children, ...props }) {
  return (
    <label className={styles.checkbox}>
      <input type="hidden" />
      <input type="checkbox" {...props} />
      <span className={styles.icon}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="1" fill="#FE9235" />
          <path d="M6 10.5L9.68182 14L15 7" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={styles.text}>{children}</span>
    </label>
  )
}

export default Checkbox