import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import { useStore } from "@app/store"
import {
  Instagram,
  Phone,
  Mail,
  GitHub,
  Linkedin,
  Twitter,
} from "react-feather"
import clsx from "clsx"
import Section from "@app/molecules/Section"
import { Container } from "react-bootstrap"

const SocialMediaLinks = (props) => {
  const { email, instagram, github, twitter, linkedin, phoneNumber } =
    useStore()

  const links = [
    {
      title: email,
      Icon: Mail,
      href: `mailto:${email}`,
    },
    {
      title: phoneNumber,
      Icon: Phone,
      href: `tel:${phoneNumber}`,
    },
    {
      title: "yashraj.dev",
      Icon: Instagram,
      href: instagram,
    },
    {
      title: "yashrajb",
      Icon: GitHub,
      href: github,
    },
    {
      title: "yashrajbasan",
      Icon: Linkedin,
      href: linkedin,
    },
  ]

  return (
    <Container>
      <div className={clsx(["row", styles.links])}>
        <div className="col d-flex flex-wrap justify-content-center align-items-center">
          {links.map(({ title, Icon, href }) => {
            return (
              <a
                href={href}
                target="_blank"
                key={title}
                className={styles.link}
              >
                <Icon size={25} />
              </a>
            )
          })}

          <div className="w-100 text-center mt-3">
            &copy; {new Date().getFullYear()} Yashraj Basan
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SocialMediaLinks
