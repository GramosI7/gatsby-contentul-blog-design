import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/page-courses/Card"
import Wave from "../components/Wave"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Style
import "../styles/page-courses/Courses.scss"

export default function courses({ data }) {
  return (
    <Layout>
      <SEO title="Courses" />
      <div className="page-courses">
        <div className="page-courses__header">
          <div className="container">
            <img src={require("../images/react-logo.png")} />
            <div className="page-courses__header__title">
              <h1>Courses</h1>
              <div className="page-courses__header__title__info">
                <span className="number-section bg-white-text">
                  12 Sections
                </span>
                <br />
                <span className="author bg-white-text">
                  Taught by Imeri Gramos
                </span>
              </div>
              <p>
                Learn to build an iOS and Android app from scratch. A 6-hour
                course for designers teaching custom animations, Styled
                Components, Redux, API data, HTML rendering with Markdown and
                adaptive layouts in React Native.
              </p>
            </div>
          </div>
          <Wave color="#222D4F" />
        </div>
        <div className="page-courses__container-course">
          <div className="container">
            {data.item.edges.map((element, index) => (
              <AniLink
                key={index}
                paintDrip
                hex="#1a223d"
                to={`/cours/${element.node.slug}`}
              >
                <Card {...element.node} />
              </AniLink>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    item: allContentfulCourse {
      edges {
        node {
          title
          desc
          slug
          image {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
