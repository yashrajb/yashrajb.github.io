import React from "react"
import { Col, Row } from "react-bootstrap"
import Symbol from "@app/atoms/Symbol"

import * as styles from "./style.module.scss"

export default function (
  { title, company, startDate, endDate, description },
  index
) {
  return (
    <Row>
      <Col className={styles.experience} key={index} value={company}>
        <h3 className={styles.title}>
          {title} <Symbol /> {company}
        </h3>
        <h5 className={styles.date}>
          {startDate} <Symbol /> {endDate}
        </h5>
        <p className={styles.description}>{description}</p>
      </Col>
    </Row>
  )
}
