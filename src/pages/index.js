import React from "react"
import "@app/styles/pages/home.scss"
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

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero id="hero" />
      <Services id="services" />
      <Experience id="experience" />
      <Projects id="works" />
      <Testimonial id="testimonials" />
      <About id="about" />
    </Layout>
  )
}

export default IndexPage
