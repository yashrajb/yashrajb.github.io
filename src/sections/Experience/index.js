import React, { useState, useRef } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import experiences from "@app/constants/experience"
import ExperienceDetails from "./ExperienceDetails"
import { Row } from "react-bootstrap"

const Experience = ({ id }) => {
  return (
    <Section id={id} title="Experience" className={styles.workHistory}>
      {experiences.map(
        (
          { title, company, description, startDate, endDate, points },
          index
        ) => {
          return (
            <ExperienceDetails
              index={index}
              title={title}
              company={company}
              startDate={startDate}
              endDate={endDate}
              description={description}
            />
          )
        }
      )}
    </Section>
  )
}

export default Experience
