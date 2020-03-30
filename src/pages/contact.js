import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Logo from "../assets/designcode-logo-on-dark.svg"
import axios from "axios"
// Style
import "../styles/page-contact/contact.scss"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
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
    console.log(formData)
    axios
      .post("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      })
      .then(() => {
        // console.log("response:", response);
        alert("success")
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
          <h2>Send me a message</h2>
          <form
            onSubmit={onSubmit}
            // name="contact"
            // method="POST"
            // data-netlify="true"
            // data-netlify-honeypot="bot-field"
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
              type="email"
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
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
