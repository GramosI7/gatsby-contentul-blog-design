import React, { useEffect, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ModalAbout from "./page-about/modalAbout"
import LogoHome from "../assets/home-solid.svg"
import LogoCourse from "../assets/list-ul-solid.svg"
import LogoAccount from "../assets/about.svg"
import LogoEmail from "../assets/email.svg"

// Style
import "../styles/Nav.scss"

const fadeDown = {
  visible: {
    y: 0,
    transition: {
      duration: 0,
    },
  },
  hidden: {
    y: "-100%",
    transition: {
      duration: 0,
    },
  },
}

export default function Nav() {
  const [scroll, setScroll] = useState(false)
  const [openAbout, setOpenAbout] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleScroll = () => setScroll(window.pageYOffset)

  return (
    <StaticQuery
      query={getPhoto}
      render={data => (
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={fadeDown}
          className={scroll > 50 ? "mini-nav" : ""}
        >
          <div className="container nav-deskop">
            <ul>
              <li className="logo">
                <AniLink paintDrip hex="#1a223d" to="/" duration={1}>
                  <Img fixed={data.framer.childImageSharp.fixed} />
                </AniLink>
              </li>
              <li>
                <AniLink paintDrip hex="#1a223d" to="/" duration={1}>
                  Home
                </AniLink>
              </li>
              <li>
                <AniLink paintDrip hex="#1a223d" to="/courses" duration={1}>
                  Courses
                </AniLink>
              </li>
              <li onClick={() => setOpenAbout(true)}>
                <a>About</a>
              </li>
              <li>
                <AniLink paintDrip hex="#1a223d" to="/contact">
                  Contact
                </AniLink>
              </li>
              <li className="mode">
                <Img fixed={data.react.childImageSharp.fixed} />
              </li>
            </ul>
          </div>
          <div className="nav-phone">
            <div className="container">
              <ul>
                <li>
                  <AniLink paintDrip hex="#1a223d" to="/" duration={1}>
                    <LogoHome />
                  </AniLink>
                </li>
                <li>
                  <AniLink paintDrip hex="#1a223d" to="/courses" duration={1}>
                    <LogoCourse />
                  </AniLink>
                </li>
                <li>
                  <a onClick={() => setOpenAbout(true)}>
                    <LogoAccount />
                  </a>
                </li>
                <li>
                  <AniLink paintDrip hex="#1a223d" to="/contact" duration={1}>
                    <LogoEmail />
                  </AniLink>
                </li>
              </ul>
            </div>
          </div>
          <ModalAbout open={openAbout} handleModal={setOpenAbout} />
        </motion.nav>
      )}
    />
  )
}

const getPhoto = graphql`
  query {
    framer: file(relativePath: { eq: "framer-logo.png" }) {
      childImageSharp {
        fixed(width: 28) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    react: file(relativePath: { eq: "react-logo.png" }) {
      childImageSharp {
        fixed(width: 37) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
