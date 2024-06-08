import React, { useRef } from "react"
import useIsInViewPort from "@app/hooks/useIsInViewPort"
import { Image } from "react-bootstrap"

export default ({ src, viewPort = true, ...otherProps }) => {
  const ref = useRef()
  const isVisible = useIsInViewPort(ref)
  return (
    <div ref={ref}>
      {isVisible ? (
        <img className={"img-fluid"} src={src} {...otherProps} />
      ) : (
        <p></p>
      )}
    </div>
  )
}
