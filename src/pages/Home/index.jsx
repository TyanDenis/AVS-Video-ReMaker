import React from "react"
import RegisterForm from "../../components/RegisterForm"
import Logo from "../../components/Logo"
import TitleDecor from "../../components/TitleDecor"
import styles from "./Home.module.scss"

import bannerImg from "../../assets/media/img/banner-img.png"

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles['side-decor']}></div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.body}>
              <Logo className="logo-home" />

              <div className={styles.inner}>
                <TitleDecor className="title-decor-mobile" />
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.banner} style={{ backgroundImage: `url(${bannerImg})` }}>
          <div className={styles.title}>
            <TitleDecor className="title-decor-pc" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home