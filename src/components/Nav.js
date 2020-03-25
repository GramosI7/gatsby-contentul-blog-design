import React, { useEffect, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"

// Style
import "../styles/Nav.scss"

// const fadeUp = {
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 2.7,
//       duration: 1.2,
//     },
//   },
//   hidden: { opacity: 0, y: 100 },
// }

let easing = [0.6, -0.05, 0.01, 0.99]

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
          className={scroll > 50 && "mini-nav"}
        >
          <div className="container">
            <ul>
              <li className="logo">
                <a href="">
                  <Img fixed={data.framer.childImageSharp.fixed} />
                </a>
              </li>
              <li>
                <a href="!#">Animation</a>
              </li>
              <li>
                <a href="!#">Gesture</a>
              </li>
              <li>
                <a href="!#">Utilities</a>
              </li>
              <li>
                <a href="!#">Types</a>
              </li>
              <li className="mode">
                <a href="">
                  <Img fixed={data.react.childImageSharp.fixed} />
                </a>
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
