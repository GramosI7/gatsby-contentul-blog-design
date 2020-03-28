import React from "react"
import Course from "./Course"
import Wave from "../Wave"
import { graphql, StaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Style
import "../../styles/Courses/Courses.scss"

export default function Courses() {
  return (
    <section className="courses">
      <Wave position="top" color="#fff" />
      <div className="container">
        <div className="left-side">
          <h3>
            <span className="bg-blue-text">Your components</span>
            <br />
            <span>are the single source of truth</span>
          </h3>
          <p>
            Framer X will allow designers to get closer to high-fidelity
            prototyping and implementation using a shared library of components
            built in React. The future of design tools is here.
          </p>
        </div>
        <div className="right-side">
          <ul>
            <StaticQuery
              query={getData}
              render={data => {
                return data.item.edges.map((element, index) => (
                  <AniLink
                    key={index}
                    paintDrip
                    hex="#1a223d"
                    to={`/cours/${element.node.slug}`}
                  >
                    <Course {...element.node} />
                  </AniLink>
                ))
              }}
            />
          </ul>
        </div>
      </div>
    </section>
  )
}

const getData = graphql`
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
