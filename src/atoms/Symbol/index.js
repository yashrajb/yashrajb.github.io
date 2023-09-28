import React from "react"

const symbolVariants = {
  dot: "•",
  cube: "■",
  triangle: "►",
  openQuotation: "❝",
  closeQuotation: "❞",
}

function Symbol({ variant = "dot", className }) {
  return <span className={className}>{symbolVariants[variant]}</span>
}

export default Symbol
