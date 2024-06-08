import React from "react"
import Context from "./src/molecules/Context"
import "bootstrap/dist/css/bootstrap.min.css"
import "./src/styles/default.scss"

export const wrapPageElement = ({ element, props }) => {
  return <Context>{element}</Context>
}
