import React from "react"
import Layout from "../components/layout"
import Logo from "../assets/designcode-logo-on-dark.svg"

// Style
import "../styles/page-contact/contact.scss"

export default function contact() {
  return (
    <Layout>
      <div className="page-contact">
        <div className="container">
          <Logo />
          <h2>Send me a message</h2>
          <form name="contact" method="POST" data-netlify="true">
            <input type="name" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea type="text" name="message" placeholder="Message" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
