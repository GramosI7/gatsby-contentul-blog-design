import React, { useEffect, useState } from "react"
import "../styles/Slide.scss"

import Close from "../assets/close.svg"

import { motion, useSpring, useTransform } from "framer-motion"

let targetElement = document.querySelector("html")

const ease = [0.6, 0.05, -0.01, 0.99]

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

export default function Slide() {
  const [state, setState] = useState(false)
  let [width, setWidth] = useState(getWidth())
  const [xConstraint, setXConstraint] = useState(-8000)

  let x = useSpring(0, { stiffness: 200, damping: 300, ease: ease })
  const scale = useTransform(x, [-1000, 0], [3, 1])
  const opacity = useTransform(x, [-400, 0], [1, 0])
  const fadeUp = useTransform(x, [-300, 0], [-100, 0])
  const fadeDown = useTransform(x, [-300, 0], [100, 0])
  const opacityText = useTransform(x, [-300, 0], [0, 1])
  const fadeOn = useTransform(x, [-400, 0], [0, -100])

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(getWidth())
      if (window.matchMedia("(max-width: 500px)").matches) {
        setXConstraint(-8300)
      }
    }, 1000)
    // set resize listener
    window.addEventListener("resize", debouncedHandleResize)
    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  })

  useEffect(() => {
    x.onChange(() => {
      x.get() > -100 ? setState(false) : setState(true)
    })
  }, [x])

  //Setting body scroll
  useEffect(() => {
    state
      ? targetElement.classList.add("no-scroll")
      : targetElement.classList.remove("no-scroll")
  })

  const closeProductDrag = () => {
    x.stop()
    x.set(0)
  }

  return (
    <section className="slide-list">
      <motion.div
        style={{ opacity }}
        className="motion-background"
      ></motion.div>
      <div className="container">
        <motion.div
          style={{ opacity: opacity, translateY: fadeOn }}
          className="btn-delete"
          onClick={closeProductDrag}
        >
          <Close />
        </motion.div>
        <div className="contain-info">
          <motion.div
            style={{ translateY: fadeUp, opacity: opacityText }}
            className="contain-info__top"
          >
            <h2>My Skills</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ullam laudantium, earum non dolores error saepe. Dignissimos, enim
              quos libero itaque a, commodi, dolores impedit officiis quod minus
              doloribus illo?
            </p>
            <span
              style={{ translateY: fadeUp, opacity: opacityText }}
              className="text-scroll"
            >
              Scroll to view =>
            </span>
          </motion.div>

          <motion.ul
            style={{ x, scale }}
            drag="x"
            dragConstraints={{ left: xConstraint, right: 0 }}
            dragElastic={0.05}
          >
            <li>
              <span>HTML5</span>
            </li>
            <li>
              <span>CSS3</span>
            </li>
            <li>
              <span>Javascript</span>
            </li>
            <li>
              <span>ReactJS</span>
            </li>
            <li>
              <span>NodeJS</span>
            </li>
            <li>
              <span>Framer/GSAP</span>
            </li>
            <li>
              <span>Framer/GSAP</span>
            </li>
          </motion.ul>
          <motion.span
            style={{ translateY: fadeDown, opacity: opacityText }}
            className="text-bottom"
          >
            You see my skills ? 😵
          </motion.span>
        </div>
      </div>
    </section>
  )
}
