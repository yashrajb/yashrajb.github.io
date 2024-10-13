import React from "react"
import Header from "@app/molecules/Header"
import SocialMediaLinks from "@app/molecules/SocialMediaLinks"
export default ({ children, hideFooter = false, ...other }) => {
  return (
    <>
      <Header />
      {children}
      {!hideFooter ? <SocialMediaLinks /> : null}
    </>
  )
}
