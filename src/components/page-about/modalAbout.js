import React, { useEffect, useState } from "react"
import Cross from "../../assets/cross.svg"
import Wave from "../Wave"

import { motion, AnimatePresence } from "framer-motion"

// Style
import "../../styles/page-about/modal-about.scss"

export default function ModalAbout({ open, handleModal }) {
  const [targetElement, setElement] = useState()

  useEffect(() => {
    if (typeof targetElement !== "undefined") {
      open
        ? targetElement.classList.add("no-scroll")
        : targetElement.classList.remove("no-scroll")
    }
    console.log(open, targetElement)
  }, [open, targetElement])

  useEffect(() => {
    if (typeof window === "undefined" || !window.document) {
      return
    }
    setElement(document.querySelector("html"))
  }, [open, targetElement])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="about"
          onClick={() => handleModal(false)}
        >
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            className="modal-about"
            onClick={e => {
              e.stopPropagation()
            }}
          >
            <div className="modal-header">
              <Cross
                onClick={() => handleModal(false)}
                className="cross-modal"
              />
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80"
                alt=""
              />
              <div className="modal-user">
                <h3>Imeri Gramos</h3>
                <div className="statut">Developpeur Full-Stack</div>
              </div>
              <Wave height="80" color="#1a223d" />
            </div>
            <div className="container">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores provident repellendus optio minima.
              </p>
              <div className="modal-container__skills">
                <img src={require("../../images/logo-figma.png")} />
                <img src={require("../../images/logo-framerx.png")} />
                <img src={require("../../images/logo-react.png")} />
                <img src={require("../../images/logo-swift.png")} />
                <img src={require("../../images/logo-vue.png")} />
                <img src={require("../../images/logo-xcode.png")} />
              </div>
              <div className="modal-container__socials">
                <a href="">Instagram</a>
                <a href="">Twitter</a>
                <a href="">LinkedIn</a>
                <a href="">Github</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
