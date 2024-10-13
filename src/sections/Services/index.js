import React, { useState, useRef } from "react"
import {
  CardBody,
  Card,
  CardTitle,
  CardSubtitle,
  CardHeader,
  CardText,
  Container,
} from "react-bootstrap"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import { Row, Col } from "react-bootstrap"

const allServices = [
  {
    name: "MVP Development",
    image: "/mvp.svg",
    tagline: "Turning Ideas into Reality",
    desc: "I help startups and businesses quickly bring their ideas to life by building Minimum Viable Products (MVPs). My expertise in web technologies ensures a robust, scalable foundation for your MVP, allowing you to test and iterate fast.",
  },

  {
    name: "Web App Development",
    image: "/webapp.svg",
    tagline: "Crafted for Growth and Performance",
    desc: "I build custom web applications that are not only dynamic and responsive but also designed to scale with your business. Whether it’s handling increasing traffic, adding new features, or expanding functionality, my solutions ensure your website performs efficiently as your business grows.",
  },

  {
    name: "Browser Extension Development",
    image: "/browser-extension-development.svg",
    tagline: "Enhancing Browsing Experiences",
    desc: "I can build efficient, secure browser extensions for platforms like Chrome and Firefox. These custom extensions add value and enhance productivity for users, fully integrating with your web services.",
  },
  {
    name: "Technical Interviews",
    image: "/tech-interview.svg",
    tagline: "Finding the Right Talent for Your Web Projects",
    desc: "I conduct technical interviews focused on web technologies and browser-based solutions to help you hire the right experts for your team.",
  },
]

const renderCard = ({ image, name, tagline, desc }, index) => {
  return (
    <Card className={styles.card}>
      <CardBody className={styles.cardBody}>
        <Row>
          <Col xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
            <img alt="Sample" src={image} />
          </Col>
          <Col
            xs="12"
            sm="12"
            md="8"
            lg="8"
            xl="8"
            xxl="8"
            className={styles.headerRightCol}
          >
            <CardTitle tag="h1" className={styles.cardTitle}>
              {name}
            </CardTitle>
          </Col>
        </Row>

        <CardText className={styles.desc}>{desc}</CardText>
      </CardBody>
    </Card>
  )
}

const renderRows = () => {
  const rows = []
  for (let i = 0; i < allServices.length; i += 2) {
    const col1 = allServices[i]
    const col2 = allServices[i + 1]
    rows.push(
      <Row className="mt-3" key={i}>
        <Col
          xs="12"
          sm="12"
          md="12"
          lg={col2 ? "6" : "12"}
          xl={col2 ? "6" : "12"}
          xxl={col2 ? "6" : "12"}
        >
          {renderCard(col1, i)}
        </Col>
        {col2 && (
          <Col
            xs="12"
            sm="12"
            md="12"
            lg={"6"}
            xl={"6"}
            xxl={"6"}
            className={styles.secondCol}
          >
            {renderCard(col2, i + 1)}
          </Col>
        )}
      </Row>
    )
  }
  return rows
}

const Services = ({ id }) => {
  return (
    <Section id={id} title="How i can help you?" className={styles.services}>
      <Container>{renderRows()}</Container>
    </Section>
  )
}

export default Services
