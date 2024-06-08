import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import Image from "@app/molecules/Image"
import SocialMediaLinks from "@app/molecules/SocialMediaLinks/index"

const About = ({ id }) => {
  return (
    <Section id={id} title="About" className={styles.about}>
      <div className="row">
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12">
          <Image src="/author.jpg" alt={"author"} />
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12">
          <h4 className={styles.description}>
            Since my school days, I've been passionate about building websites.
            Completing a web project feels like wielding digital magic. My
            journey began with{" "}
            <a
              target="_blank"
              className={styles.duckettBooks}
              href="https://amzn.to/46cNYJi"
            >
              Jon Duckett's Books
            </a>
            , immersing myself in HTML, CSS, and JavaScript. This curiosity led
            to over 3 years of hands-on software development experience and a
            Computer Science degree. Outside of coding, I enjoy playing guitar,
            reading books, and learning new skills.
          </h4>
          <h4 className={styles.description}>
            Feel free to reach out to me if you think I can help you with your
            project or if you just want to say hi!
          </h4>
        </div>
      </div>
    </Section>
  )
}

export default About
