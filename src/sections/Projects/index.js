import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import allProjects from "@app/constants/projects"
import useIsInViewPort from "@app/hooks/useIsInViewPort"
import Button from "@app/atoms/Button"
import { useStore } from "@app/store"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-bootstrap"
import ProjectDetails from "@app/molecules/ProjectDetails/index"

const Projects = ({ id }) => {
  const { github } = useStore()

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___createdAt], order: DESC }
        filter: { fileAbsolutePath: { regex: "/case-study/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              tech
              links {
                title
                link
              }
              createdAt
              website
              featureImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt(pruneLength: 350)
          }
        }
      }
    }
  `)

  const projectsList = allProjects.map((props) => {
    return <ProjectDetails src={`/projects/${props.image}`} {...props} />
  })

  const caseStudyList = data?.allMarkdownRemark?.edges.map((edge, index) => {
    let { title, featureImage, tech, links, description, website } =
      edge.node.frontmatter
    let { slug } = edge.node.fields

    const projectDetailsProps = {
      title,
      description,
      tech,
      links,
      slug,
      src: featureImage.childImageSharp.fluid.src,
    }

    return <ProjectDetails {...projectDetailsProps} />
  })

  const content = (
    <>
      {projectsList}
      {caseStudyList}
      <p className={styles.seeAll}>
        <Button href={github}>See All Projects</Button>
      </p>
    </>
  )

  return (
    <Section id={id} title="Selected Projects" className={styles.projects}>
      {content}
    </Section>
  )
}

export default Projects
