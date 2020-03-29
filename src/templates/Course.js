import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"

// SVG
import ArrowDown from "../assets/down-arrow.svg"

// Style
import "../styles/Templates/Course.scss"

export default function Course({ data }) {
  const {
    title,
    desc,
    image,
    contenu: { json },
  } = data.course

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <img
            width="100%"
            src={node.data.target.fields.file["en-US"].url}
            alt={title}
          />
        )
      },
    },
  }

  return (
    <Layout>
      <div className="template-course">
        <BackgroundImage
          Tag="div"
          fluid={image.fluid}
          className="contain-background-header"
        >
          <div className="container">
            <div className="header-title">
              <h1>{title}</h1>
              <div className="desc">{desc}</div>
            </div>
            <a href="#course-article">
              <div className="arrow">
                <ArrowDown />
              </div>
            </a>
          </div>
        </BackgroundImage>
        <div id="course-article" className="content-course">
          <article className="container">
            <div className="content">
              {documentToReactComponents(json, options)}
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($singleSlug: String!) {
    course: contentfulCourse(slug: { eq: $singleSlug }) {
      title
      desc
      slug
      image {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      contenu {
        json
      }
    }
  }
`
