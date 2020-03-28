import React from "react"

import "../styles/global.scss"

import SEO from "../components/seo"
import Slide from "../components/Slide"
import Header from "../components/header"
import Nav from "../components/Nav"
import Examples from "../components/Examples/Examples"
import Courses from "../components/Courses/Courses"
import StartCourse from "../components/StartCourse"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Header />
    <Slide />
    <Examples />
    <Courses />
    <StartCourse />
  </Layout>
)

export default IndexPage
