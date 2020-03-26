import React from "react"

import "../styles/global.scss"

import SEO from "../components/seo"
import Slide from "../components/Slide"
import Header from "../components/header"
import Nav from "../components/Nav"
import Examples from "../components/Examples/Examples"
import Courses from "../components/Courses/Courses"

const IndexPage = () => (
  <main>
    <SEO title="Home" />
    <Nav />
    <Header />
    <Slide />
    <Examples />
    <Courses />
  </main>
)

export default IndexPage
