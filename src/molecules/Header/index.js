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
import { Menu } from "react-feather"

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
        <Navbar.Brand>
          <Link to="/">{title}</Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.navbarCollapse}
        >
          <Menu size={30} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={clsx(["ml-auto", styles.navbarCollapse])}>
            {headerLinks.map((props, index) => {
              if (!props.to) {
                props.onClick = () => onHeaderLinkClick(props.name)
              }
              return (
                <Nav.Link {...props} key={props.name}>
                  {props.to ? (
                    <Link to={props.to}>{props.name}</Link>
                  ) : (
                    props.name
                  )}
                </Nav.Link>
              )
            })}
            <Button size="sm" to="/contact" className={styles.hireMe}>
              Hire me
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
