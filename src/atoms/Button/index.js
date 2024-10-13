import React from "react"
import { Button } from "react-bootstrap"
import * as styles from "./style.module"
import clsx from "clsx"
import { Link } from "gatsby"
export default ({
  type,
  children,
  to,
  href,
  className = "",
  ...otherProps
}) => {
  let classes = clsx([
    styles.btn,
    className,
    href ? styles.link : null,
    type && type == "secondary" ? styles.secondary : null,
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
      <Button className={classes} target="_blank" href={href} {...otherProps}>
        {children}
      </Button>
    )
  }

  return (
    <Button className={classes} {...props}>
      {children}
    </Button>
  )
}
