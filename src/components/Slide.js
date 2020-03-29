import React, { useEffect, useState } from "react"
import "../styles/Slide.scss"

import Close from "../assets/close.svg"

import { motion, useSpring, useTransform } from "framer-motion"
import Wave from "./Wave"

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
  const [xConstraint, setXConstraint] = useState(-6600)
  const [targetElement, setElement] = useState()

  let x = useSpring(0, { stiffness: 200, damping: 300, ease: ease })
  const scale = useTransform(x, [-1000, 0], [3, 1])
  const opacity = useTransform(x, [-400, 0], [1, 0])
  const fadeUp = useTransform(x, [-300, 0], [-100, 0])
  const fadeDown = useTransform(x, [-300, 0], [100, 0])
  const opacityText = useTransform(x, [-300, 0], [0, 1])
  const fadeOn = useTransform(x, [-400, 0], [0, -100])
  const displayIt = useTransform(x, [-1, 0], [1, -100])

  useEffect(() => {
    if (window.matchMedia("(max-width: 500px)").matches) {
      setXConstraint(-7000)
    }
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(getWidth())
      if (window.matchMedia("(max-width: 500px)").matches) {
        setXConstraint(-7000)
      }
    }, 1000)
    // set resize listener
    window.addEventListener("resize", debouncedHandleResize)
    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [width])

  useEffect(() => {
    x.onChange(() => {
      x.get() > -100 ? setState(false) : setState(true)
    })
  }, [x])

  //Setting body scroll
  useEffect(() => {
    if (typeof targetElement !== "undefined") {
      state
        ? targetElement.classList.add("no-scroll")
        : targetElement.classList.remove("no-scroll")
    }
  })

  useEffect(() => {
    if (typeof window === "undefined" || !window.document) {
      return
    }
    setElement(document.querySelector("html"))
  }, [targetElement])

  const closeProductDrag = () => {
    x.stop()
    x.set(0)
  }

  return (
    <motion.section className="slide-list">
      <motion.div
        style={{ opacity, zIndex: displayIt }}
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
            <h2 className="bg-blue-text">My Skills</h2>
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
              Drag to view
            </span>
          </motion.div>

          <motion.ul
            style={{ x, scale }}
            drag="x"
            dragConstraints={{ left: xConstraint, right: 0 }}
            dragElastic={0.05}
            className="bg-blue-text"
          >
            <li>
              <span>Animation</span>
            </li>
            <li>
              <span>Gesture</span>
            </li>
            <li>
              <span>Utilities</span>
            </li>
            <li>
              <span>Types</span>
            </li>
            <li>
              <span>Spring</span>
            </li>
            <li>
              <span>Ease</span>
            </li>
            <li>
              <span>UseCycle</span>
            </li>
          </motion.ul>
          <motion.span
            style={{ translateY: fadeDown, opacity: opacityText }}
            className="text-bottom"
          >
            Motion Drag
          </motion.span>
        </div>
      </div>
      <Wave color="#fff" />
    </motion.section>
  )
}
