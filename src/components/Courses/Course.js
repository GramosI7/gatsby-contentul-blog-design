import React, { useState, useEffect, useRef } from "react"
import BackgroundImage from "gatsby-background-image"
import { motion } from "framer-motion"
import { useIntersection } from "react-use"

const variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
}

export default function Course({ title, desc, image }) {
  const [appear, setAppear] = useState(false)

  const sectionRef = useRef(null)

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px 0px -40px",
    threshold: 0.5,
  })

  useEffect(() => {
    intersection && intersection.intersectionRatio < 0.5
      ? setAppear(false)
      : setAppear(true)
  }, [intersection])

  return (
    <motion.li
      ref={sectionRef}
      initial="hidden"
      animate={appear ? "show" : "hidden"}
      variants={variants}
      drag="x"
      dragConstraints={{ left: -30, right: 30 }}
    >
      <BackgroundImage
        Tag="div"
        className="background"
        fluid={image.fluid}
      ></BackgroundImage>
      <div className="info">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </motion.li>
  )
}
