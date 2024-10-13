import React from "react"
import * as styles from "@app/styles/pages/404.module"
import Image from "@app/molecules/Image"
import { Link } from "gatsby"
import Layout from "@app/molecules/Layout/index"
const NotFoundPage = () => (
  <Layout hideFooter={true}>
    <div className={styles.notFoundPage}>
      <img src="/404.png" />
      <h1>404 NOT FOUND</h1>
      <p>We're Sorry, but it seems you've taken a wrong turn.</p>
    </div>
  </Layout>
)

export default NotFoundPage
