import React, { useRef } from "react"
import PropTypes from "prop-types"
import * as styles from "./style.module.scss"
import SectionTitle from "@app/atoms/SectionTitle"
import useIsInViewPort from "@app/hooks/useIsInViewPort"
import clsx from "clsx"
import { Container } from "react-bootstrap"

import Animation from "@app/molecules/Animation"

const Section = (props) => {
  let {
    title,
    children,
    className = "",
    animationName = "slide-right",
    lazyLoading,
    fluid = false,
    ...otherProps
  } = props
  let classes = clsx([className, styles.container, "section"])

  const sectionTitle = title ? <SectionTitle>{title}</SectionTitle> : ""

  return (
    <Container fluid={true} className={classes} {...otherProps}>
      <Container>
        {sectionTitle}
        <Animation name={animationName}>{children}</Animation>
      </Container>
    </Container>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string,
  fluid: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
}
