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
          <form action="">
            <input type="name" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea type="text" placeholder="Message" />
            <button>Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
