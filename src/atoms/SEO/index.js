import React from "react"
import { Helmet } from "react-helmet"
import { useStore } from "@app/store/index"

const SEO = (props) => {
  const host = typeof window !== "undefined" ? window.location.host : ""

  const store = useStore()

  let title = props?.title || `${store.title} - ${store.description}`
  let description = props?.description || store.description
  let twitter = store?.twitter

  let article =
    typeof window !== "undefined"
      ? window?.location?.pathname?.includes("case-study")
      : false

  let url = (typeof window !== "undefined" ? window.location.href : "") || null

  let image = `${host}/author.jpg`

  return (
    <Helmet title={title} titleTemplate={title}>
      <html lang="en" />
      <title>{title}</title>
      {/* Google AdSense account meta (added for older Gatsby/static SSR pages) */}
      <meta name="google-adsense-account" content="ca-pub-7522178747096822" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {url && <meta property="og:url" content={url} />}
      {article && <meta property="og:type" content="article" />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {twitter ? <meta name="twitter:creator" content={twitter} /> : ""}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
