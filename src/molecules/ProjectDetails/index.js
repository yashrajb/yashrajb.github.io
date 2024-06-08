import React from "react"
import Button from "@app/atoms/Button/index"

import * as styles from "./style.module.scss"
import clsx from "clsx"

export default (props) => {
  const { title, src, links, tech, description, slug } = props
  return (
    <div className={clsx(["row", styles.projectDetails])}>
      <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12">
        <img className="img-fluid" src={src} alt={`project-${title}`} />
      </div>
      <div
        className={clsx([
          "col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12",
          styles.details,
        ])}
      >
        <h3>{title}</h3>
        <h4>{tech}</h4>
        <h5>{description}</h5>

        {links.map(({ title, link }) => {
          return (
            <Button
              key={title}
              href={link}
              className={styles.link}
              target="_blank"
            >
              {title}
            </Button>
          )
        })}

        {slug ? (
          <Button href={`/case-study/${slug}`} key={`case-study-${title}`}>
            Read Case Study
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
