import React from "react"

import "../styles/global.scss"

import SEO from "../components/seo"
import Slide from "../components/Slide"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Slide />
    <div className="try"></div>
  </div>
)

export default IndexPage
