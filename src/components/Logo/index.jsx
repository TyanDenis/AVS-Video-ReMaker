import React from "react"
import styles from "./Logo.module.scss"
import logo from "../../assets/media/img/logo.svg"

function Logo({ className }) {
  return (
    <a className={`${styles.logo} ${className}`} href="/">
      <img src={logo} alt="Logotype" />
    </a>
  )
}

export default Logo