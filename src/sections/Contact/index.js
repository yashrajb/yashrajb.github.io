import React from "react"
import Button from "@app/atoms/Button"
import Section from "@app/molecules/Section"
import { useStore } from "@app/store"
import { Form, Row, Col } from "react-bootstrap"

import Image from "@app/molecules/Image/index"
import About from "../About/index"
import Input from "@app/atoms/Input/index"
import useSocialMediaLinks from "@app/hooks/useSocialMediaLinks"
import * as style from "./index.module.scss"


const Contact = () => {
  const { author } = useStore()

  const links = useSocialMediaLinks()

  return (
    <Section className={style.main} lazyLoading={false}>
      <div className="row gap-3">
     
        <Col xs="12" sm="12" md="12" lg="6"> 
          <h2 className={style.greetings}>Contact Me</h2>
          <p className={style.headline}>
            Got a project in mind or just want to chat? I’m here to help turn{" "}
            <span className={"colorfulTag"}>your vision into reality</span>.
            Let’s connect and create something impactful!
          </p>
          {links.map(({ title, Icon, href }) => {
            return (
              <a href={href} target="_blank" key={title} className={style.link}>
                <Icon size={30} />
              </a>
            )
          })}
         </Col>

         <Col xs="12" sm="12" md="12" lg="6" className={style.contactForm}>
          <Image src="/contact.svg" />
        </Col>

      </div> 
    </Section>
  )
}

export default Contact
