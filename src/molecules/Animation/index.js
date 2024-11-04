import React from "react"
import * as styles from "./style.module.scss"
const Animation = ({ children, name }) => {
  return (
    <div
      className={styles.container}
      // data-sal={name}
      // data-sal-duration={1000}
      // data-sal-easing="ease"
    >
      {children}
    </div>
  )
}

export default Animation
