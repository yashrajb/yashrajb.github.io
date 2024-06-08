import React from "react"
import Header from "@app/molecules/Header"
import SocialMediaLinks from "@app/molecules/SocialMediaLinks"
export default ({ children, ...other }) => {
  return (
    <>
      <Header />
      {children}
      <SocialMediaLinks />
    </>
  )
}
