import React from "react"
import Context from "./src/molecules/Context"
import "bootstrap/dist/css/bootstrap.min.css"
import "./src/styles/default.scss"

export const wrapPageElement = ({ element, props }) => {
  return <Context>{element}</Context>
}

// Inject meta tag at build/SSR time for older Gatsby versions which may not
// server-render Helmet-managed tags. This ensures the google-adsense account
// meta is present in the static HTML head.
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="google-adsense-account"
      name="google-adsense-account"
      content="ca-pub-7522178747096822"
    />,
  ])
}

