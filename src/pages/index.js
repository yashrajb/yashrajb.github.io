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

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero id="hero" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Testimonial id="testimonials" />
      <About id="about" />
    </Layout>
  )
}

export default IndexPage
