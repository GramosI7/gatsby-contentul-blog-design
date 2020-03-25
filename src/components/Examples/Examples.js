import React from "react"

// Style
import "../../styles/Examples/Examples.scss"
import Example from "./Example"
import { StaticQuery, graphql } from "gatsby"

export default function Examples() {
  return (
    <section className="examples">
      <div className="container">
        <h3>
          <span className="bg-blue-text">Powerful Interactive</span>
          <br />
          <span>design and code tools</span>
        </h3>
        <StaticQuery
          query={getData}
          render={data => {
            const items = data.item.edges
            return items.map((element, index) => {
              return index % 2 === 0 ? (
                <Example key={index} info={element.node} direction="left" />
              ) : (
                <Example key={index} info={element.node} direction="right" />
              )
            })
          }}
        />
      </div>
    </section>
  )
}

const getData = graphql`
  {
    item: allContentfulExample {
      edges {
        node {
          text
          image {
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
