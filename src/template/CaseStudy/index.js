import React, { useMemo } from "react"
import { graphql } from "gatsby"
import Layout from "@app/molecules/Layout"
import * as styles from "./styles.module.scss"
import SectionTitle from "@app/atoms/SectionTitle"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Image from "@app/molecules/Image"
import SEO from "@app/atoms/SEO/index"
import clsx from "clsx"
import { Link } from "gatsby"

const GridCols = 2

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        createdAt
        website
        screenshots {
          publicURL
        }
        featureImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      html
    }
  }
`

const Post = (props) => {
  let { data } = props
  const {
    title,
    website,
    createdAt,
    featureImage,
    screenshots = [],
  } = data.markdownRemark.frontmatter || {}
  const { html } = data.markdownRemark
  const image = getImage(featureImage)

  const screenshotAndGridFunc = (screenshots = []) => {
    const gridImages = []
    for (let i = 0; i < screenshots.length; ) {
      let tempArr = {
        0: screenshots[i].publicURL,
      }
      if (screenshots[i + 1]) {
        tempArr["1"] = screenshots[i + 1].publicURL
      }
      gridImages.push(tempArr)

      i = i + GridCols
    }
    return gridImages
  }

  const memoizedScreenShotAndGrid = useMemo(
    () => screenshotAndGridFunc(screenshots),
    [screenshots]
  )

  return (
    <Layout>
      <SEO
        title={`Case Study - ${title}`}
        description={`Case Study - ${title}`}
      />
      <div className={clsx(["container", styles.container])}>
        <SectionTitle>Case Study: {title}</SectionTitle>
        <h4 className={styles.dateAndWebsite}>
          {createdAt} |{" "}
          <a
            href={website}
            className={styles.website}
            target="_blank"
            rel="noreferrer"
          >
            {website}
          </a>
        </h4>
        <div className="text-center">
          {featureImage ? (
            <GatsbyImage image={image} alt={`cover image of ${title}`} />
          ) : null}
          {memoizedScreenShotAndGrid.length ? <hr /> : ""}
          {memoizedScreenShotAndGrid.length ? (
            <div className="row">
              {memoizedScreenShotAndGrid.map((images) => {
                return (
                  <>
                    <div className="col-sm">
                      <Image src={images["0"]} />
                    </div>
                    <div className="col-sm">
                      <Image src={images["1"]} />
                    </div>
                  </>
                )
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <h4 className={styles.subheadline}>
          Got a project in mind or just want to chat? I’m here to help turn{" "}
          <span className={"colorfulTag"}>your vision into reality. </span>
          <Link to="/contact" className="importantLink">
            Let’s connect
          </Link>{" "}
          and create something impactful!
        </h4>
      </div>
    </Layout>
  )
}

export default Post
