import React from "react"
import * as mainModule from "./main.module.scss"
import Button from "@app/atoms/Button"
import Section from "@app/molecules/Section"
import { useStore } from "@app/store"
import Image from "@app/molecules/Image/index"
import About from "../About/index"
import { Row, Col } from "react-bootstrap"

const Hero = () => {
  const { author } = useStore()

  const onClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }
  return (
    <Section
      animationName="none"
      className={mainModule.main}
      lazyLoading={false}
    >
      <h2 className={mainModule.greetings}>
        Hi, I'm {author}. I turn
        <span className={mainModule.colorfulTag}> Your vision into code</span>
      </h2>
      <p className={mainModule.headline}>
        I create MVPs, web applications, and browser extensions. Let’s partner
        to turn your ideas into impactful digital products that drive growth and
        success for your business.
      </p>
      <Button className={mainModule.btn} onClick={() => onClick("works")}>
        Works
      </Button>
      <Button
        onClick={() => onClick("about")}
        className={mainModule.btn}
        type="secondary"
      >
        About
      </Button>{" "}
    </Section>
  )
}

export default Hero
