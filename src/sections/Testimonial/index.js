import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import testimonials from "@app/constants/testimonials"
import Image from "@app/molecules/Image"
import Symbol from "@app/atoms/Symbol/index"

const Testimonial = ({ id }) => {
  return (
    <Section id={id} title="Testimonials" className={styles.testimonials}>
      {testimonials.map(({ title, name, image, testimonial }) => {
        return (
          <div className={styles.testimonialContainer} key={title}>
            <p className={styles.testimonial}>
              <Symbol variant="openQuotation" className={styles.symbol} />{" "}
              {testimonial}{" "}
              <Symbol variant="closeQuotation" className={styles.symbol} />
            </p>
            <img src={image} className={styles.image} alt={title} />
            <h4 className={styles.name}>{name}</h4>
            <p className={styles.position}>{title}</p>
          </div>
        )
      })}
    </Section>
  )
}

export default Testimonial
