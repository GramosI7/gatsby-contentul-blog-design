import React, { useEffect, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Style
import "../styles/Nav.scss"

// let easing = [0.6, -0.05, 0.01, 0.99]

const fadeDown = {
  visible: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    y: "-100%",
    transition: {
      duration: 1,
    },
  },
}

export default function Nav() {
  const [scroll, setScroll] = useState(false)

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
          <div className="container">
            <ul>
              <li className="logo">
                <AniLink paintDrip hex="#1a223d" to="/">
                  <Img fixed={data.framer.childImageSharp.fixed} />
                </AniLink>
              </li>
              <li>
                <AniLink paintDrip hex="#1a223d" to="/">
                  Home
                </AniLink>
              </li>
              <li>
                <AniLink paintDrip hex="#1a223d" to="/courses">
                  Courses
                </AniLink>
              </li>
              <li>
                <AniLink paintDrip hex="#1a223d" to="/about">
                  About
                </AniLink>
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
