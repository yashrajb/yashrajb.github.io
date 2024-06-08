import React from "react"
import * as styles from "./style.module.scss"
import clsx from "clsx"

export default ({ children, className = "", ...otherProps }) => {
  let classes = clsx([styles.container, className, "h2"])
  return (
    <h2 {...otherProps} className={classes}>
      {children}
    </h2>
  )
}
