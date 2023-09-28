import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import testimonials from "@app/constants/testimonials"
import { Title, Card, Flex, Text, SimpleGrid } from "@mantine/core"
import Image from "@app/molecules/Image"
import Symbol from "@app/atoms/Symbol/index"

const Testimonial = ({ id }) => {
  return (
    <Section id={id} title="Testimonials" className={styles.testimonials}>
      {testimonials.map(({ title, name, image, testimonial }) => {
        return (
          <div className={styles.testimonialContainer}>
            <Text className={styles.testimonial}>
              <Symbol variant="openQuotation" className={styles.symbol} />{" "}
              {testimonial}{" "}
              <Symbol variant="closeQuotation" className={styles.symbol} />
            </Text>
            <img src={image} className={styles.image} alt={title} />
            <Title order={2} className={styles.name}>
              {name}
            </Title>
            <Title order={3} className={styles.position}>
              {title}
            </Title>
          </div>
        )
      })}
    </Section>
  )
}

export default Testimonial
