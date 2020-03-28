import React from "react"
import Img from "gatsby-image"

// Style
import "../../styles/page-courses/Card.scss"

export default function Card({ title, desc, image }) {
  return (
    <div className="card">
      <Img className="image-card" fluid={image.fluid} />
      <h3>{title}</h3>
      <p>11 Sections</p>
    </div>
  )
}
