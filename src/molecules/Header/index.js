import React, { useState } from "react"
import * as styles from "./style.module.scss"
import { Container, Navbar, Nav } from "react-bootstrap"
import Button from "@app/atoms/Button/index"
import { Link } from "gatsby"
import Image from "@app/molecules/Image"
import { useStaticQuery, graphql } from "gatsby"
import headerLinks from "@app/constants/headerLinks"
import { useStore } from "@app/store"
import clsx from "clsx"
import { Instagram, Phone, AtSign, GitHub, Linkedin } from "react-feather"
import Animation from "@app/molecules/Animation/index"
import SocialMediaLinks from "../SocialMediaLinks/index"

export default function ResponsiveHeader(props) {
  const { title } = useStore()

  const onHeaderLinkClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      return element.scrollIntoView({
        top: "100px",
        behavior: "smooth",
      })
    }
  }

  return (
    <Navbar expand="lg" fixed="top" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/">
          <img className={styles.logo} src="/logo.png" /> {title}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.navbarCollapse}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={clsx(["ml-auto", styles.navbarCollapse])}>
            {headerLinks.map((props, index) => {
              return (
                <Nav.Link
                  {...props}
                  key={props.name}
                  onClick={() => onHeaderLinkClick(props.name)}
                >
                  {props.name}
                </Nav.Link>
              )
            })}
            <Button href="/Yashraj-Basan-Resume.pdf">Download Resume</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
