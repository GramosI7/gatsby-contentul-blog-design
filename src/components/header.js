import React from "react"
import { motion } from "framer-motion"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

// SVG
import IntroLeft from "../assets/intro-left.svg"
import IntroRight from "../assets/intro-right.svg"
import Cross from "../assets/cross.svg"

// Style
import "../styles/Header.scss"

const fadeUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.7,
      duration: 1.2,
    },
  },
  hidden: { opacity: 0, y: 100 },
}

const fadeDown = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3,
      duration: 1.2,
    },
  },
  hidden: { opacity: 0, y: -100 },
}

export default function Header() {
  return (
    <StaticQuery
      query={getData}
      render={data => (
        <BackgroundImage
          Tag="header"
          className={"header"}
          fluid={data.background.childImageSharp.fluid}
        >
          <div className="intro-animation">
            <div className="intro-animation__left">
              <IntroLeft />
            </div>
            <div className="intro-animation__right">
              <IntroRight />
            </div>
          </div>
          <div className="container">
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp}>
              <span className="framer bg-blue-text">Framer</span>
              <br />
              <span className="motion bg-blue-text">Motion</span>
              <span className="in">In</span>
              <br />
              <span className="react">ReactJS</span>
              <motion.div
                animate={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
                transition={{ ease: "easeOut", duration: 1.2, delay: 3.4 }}
                className="line-blue"
              ></motion.div>
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeDown}
              className="content-right"
            >
              <div className="content-right__image">
                <Img
                  fixed={data.react.childImageSharp.fixed}
                  alt="react logo"
                />
                <Cross />
                <Img
                  fixed={data.framer.childImageSharp.fixed}
                  alt="framer logo"
                />
              </div>
              <p>
                Create powerful design and code components for your app and
                design system
              </p>
              <motion.button
                whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
              >
                See just below
              </motion.button>
            </motion.div>
          </div>
        </BackgroundImage>
      )}
    />
  )
}

const getData = graphql`
  query {
    background: file(relativePath: { eq: "Planes17.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    framer: file(relativePath: { eq: "framer-logo.png" }) {
      childImageSharp {
        fixed(width: 26) {
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
