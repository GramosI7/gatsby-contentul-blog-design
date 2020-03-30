import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Logo from "../assets/designcode-logo-on-dark.svg"
import { motion } from "framer-motion"
// Style
import "../styles/page-contact/contact.scss"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const fadeUp = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
}

const fadeDown = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
}

const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}

export default function Contact() {
  const [appear, setAppear] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => {
        // alert("success")
        setAppear(true)
      })
      .catch(() => {
        alert("error")
      })
  }

  useEffect(() => {}, [])

  return (
    <Layout>
      <div className="page-contact">
        <div className="container">
          <Logo />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={appear ? "hidden" : "show"}
          >
            Send me a message
          </motion.h2>
          <motion.form
            variants={fade}
            initial="hidden"
            animate={appear ? "hidden" : "show"}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              onChange={onChange}
              value={formData.name}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              onChange={onChange}
              value={formData.email}
              // type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              onChange={onChange}
              value={formData.message}
              name="message"
              placeholder="Message"
              required
            />
            <motion.button
              variants={fadeDown}
              initial="hidden"
              animate={appear ? "hidden" : "show"}
              type="submit"
            >
              Send
            </motion.button>
          </motion.form>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={!appear ? "hidden" : "show"}
            transition={{ delay: 0.5 }}
            className="message-success"
          >
            <p>Thank you !</p>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
