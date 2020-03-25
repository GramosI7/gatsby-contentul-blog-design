import React from "react"

// Style
import "../../styles/Examples/Examples.scss"
import Example from "./Example"

export default function Examples() {
  return (
    <section className="examples">
      <div className="container">
        <h3>
          <span className="bg-blue-text">Powerful Interactive</span>
          <br />
          <span>design and code tools</span>
        </h3>
        <Example />
        <Example />
      </div>
    </section>
  )
}
