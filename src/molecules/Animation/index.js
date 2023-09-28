import React from "react"

const Animation = ({ children, name = "slide-right" }) => {
  return (
    <div data-sal={name} data-sal-duration={1000} data-sal-easing="ease">
      {children}
    </div>
  )
}

export default Animation
