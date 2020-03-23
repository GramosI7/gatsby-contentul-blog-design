import React from "react"

import "../styles/global.scss"

import SEO from "../components/seo"
import Slide from "../components/Slide"
import Header from "../components/header"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header />
    <Slide />
    {/* <div className="try"></div> */}
  </div>
)

export default IndexPage
