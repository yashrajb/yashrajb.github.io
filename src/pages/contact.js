import React from "react"
import Layout from "@app/molecules/Layout"
import Hero from "@app/sections/Hero"
import Experience from "@app/sections/Experience"
import Projects from "@app/sections/Projects"
import Blog from "@app/sections/Blog"
import About from "@app/sections/About"
import Testimonial from "@app/sections/Testimonial"
import SocialMediaLinks from "@app/molecules/SocialMediaLinks/index"
import SEO from "../atoms/SEO"
import Services from "@app/sections/Services/index"
import { Container } from "react-bootstrap"
import Contact from "@app/sections/Contact/index"

const IndexPage = () => {
  return (
    <Layout hideFooter={true}>
      <Contact id="contact" />
    </Layout>
  )
}

export default IndexPage
