import React from "react"
import { Button } from "react-bootstrap"
import * as styles from "./style.module"
import clsx from "clsx"
import { Link } from "gatsby"
export default ({ children, to, href, className = "", ...otherProps }) => {
  let classes = clsx([
    styles.btn,
    className,
    to || href ? styles.link : styles.btn,
  ])
  let props = {
    ...otherProps,
  }

  if (to) {
    return (
      <Link className={classes} to={to} {...otherProps}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} target="_blank" href={href} {...otherProps}>
        {children}
      </a>
    )
  }

  return (
    <Button className={classes} {...props}>
      {children}
    </Button>
  )
}
