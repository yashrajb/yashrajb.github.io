import React, { useRef, useState, useEffect } from "react"
import * as styles from "./style.module.scss"
import Section from "@app/molecules/Section"
import Button from "@app/atoms/Button"
import { useStore } from "@app/store"
import { StaticImage } from "gatsby-plugin-image"
import Image from "@app/molecules/Image"
import clsx from "clsx"
const BLOG_LENGTH = 3

const Component = () => {
  const { mediumBlogUsername } = useStore()

  const [blogs, setBlogs] = useState({})

  const URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumBlogUsername}`

  useEffect(() => {
    const fetchBlogs = async function () {
      const data = await fetch(URL)
      const body = await data.json()
      if (body?.items?.length) {
        body.items = body.items.splice(0, BLOG_LENGTH)
      }

      setBlogs(body)
    }

    fetchBlogs()
  }, [])

  const allBlogs = blogs?.items?.length
    ? blogs.items.map((blog) => {
        console.dir(blog)
        let { link, title, description, pubDate } = blog

        return (
          <div className={clsx(["row", styles.blog])}>
            <div className="col-xl-12">
              <a href={link} target="_blank">
                <h2 className={styles.title}>{title}</h2>
              </a>
              <p className={styles.date}>{pubDate}</p>
            </div>
          </div>
        )
      })
    : ""

  return (
    <>
      {allBlogs}
      <p className={styles.seeAll}>
        <Button href={blogs?.feed?.link}>Read All Blogs</Button>
      </p>
    </>
  )
}

export default function ({ id }) {
  return (
    <Section id={id} title="Blog" className={styles.blogs}>
      <Component />
    </Section>
  )
}
