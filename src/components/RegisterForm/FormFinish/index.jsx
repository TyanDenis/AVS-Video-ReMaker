import React from "react"
import HelpfulRecource from "../../HelpfulRecource"
import Divider from "../../Divider"
import styles from "./FormFinish.module.scss"

import helpItemImg1 from "../../../assets/media/img/help-item-1.svg"
import helpItemImg2 from "../../../assets/media/img/help-item-1.svg"
import helpItemImg3 from "../../../assets/media/img/help-item-1.svg"

const helpfulResources = [
  {
    id: 1,
    img: `${helpItemImg1}`,
    title: '',
    linkUrl: '',
    linkText: 'Knowledge centre'
  },
  {
    id: 2,
    img: `${helpItemImg2}`,
    title: '',
    linkUrl: '',
    linkText: 'Tips & tricks'
  },
  {
    id: 3,
    img: `${helpItemImg3}`,
    title: 'Got a question or an idea?',
    linkUrl: '',
    linkText: 'Contact us'
  }
]

function FormFinish() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Thank you!
          </h2>
          <div className={styles.text}>
            Download the full version of AVS Video ReMaker 6.7.1.262
          </div>
        </div>
        <a className="button" download href="#">Download the full version</a>
      </div>

      <Divider />

      <div className={styles.helpful}>
        <h3 className={styles.subtitle}>
          Helpful resources
        </h3>
        <div className={styles.items}>
          {
            helpfulResources.map(item => (
              <HelpfulRecource {...item} key={item.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FormFinish