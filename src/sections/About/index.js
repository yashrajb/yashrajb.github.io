import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import Image from "@app/molecules/Image"
import SocialMediaLinks from "@app/molecules/SocialMediaLinks/index"
import { Link } from "gatsby"

const About = ({ id }) => {
  return (
    <Section id={id} title="About" className={styles.about}>
      <div className="row">
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12">
          <Image src="/author.jpg" alt={"author"} />
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12">
          <p className={styles.description}>
            Since school, I’ve had a passion for building websites, feeling like
            I’m wielding digital magic with each project. My journey began with{" "}
            <a
              target="_blank"
              className="importantLink"
              href="https://amzn.to/46cNYJi"
            >
              Jon Duckett's Books
            </a>{" "}
            on HTML, CSS, and JavaScript, sparking a curiosity that grew into
            years of hands-on software development experience and a Computer
            Science degree. I’ve worked on a range of projects, from building
            MVPs to scalable web applications and browser extensions. Outside of
            coding, I love playing guitar, reading diverse genres, and
            continuously exploring new skills.
          </p>
          <p className={styles.description}>
            Feel free to{" "}
            <Link to="/contact" className="importantLink">
              reach out me
            </Link>{" "}
            if you need help with your project or just want to say hi!
          </p>
        </div>
      </div>
    </Section>
  )
}

export default About
