import React from "react"
import * as mainModule from "./main.module.scss"
import Button from "@app/atoms/Button"
import Section from "@app/molecules/Section"
import { useStore } from "@app/store"

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
      size={"responsive"}
      className={mainModule.main}
      lazyLoading={false}
    >
      <p className={mainModule.greetings}>Hi, I'm {author},</p>
      <p className={mainModule.headline}>
        Passionate about developing innovative software solutions that resolve problems in the real world and businesses.
      </p>
      <Button className={mainModule.btn} onClick={() => onClick("projects")}>
        Projects
      </Button>
      <Button onClick={() => onClick("about")} className={mainModule.btn}>
        Contact Me
      </Button>{" "}
    </Section>
  )
}

export default Hero
