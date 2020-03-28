import React from "react"
import TwitterLogo from "../assets/twitter.svg"
// Style
import "../styles/StartCourse.scss"

export default function StartCourse() {
  return (
    <section className="start-course">
      <div className="container">
        <h3>
          <span className="bg-blue-text">Start to design and code</span>
          <br />
          <span>your framer X Component</span>
        </h3>
        <p>
          Design layouts and components from scratch and learn all the workflow
          of using Framer X to create a single source of truth for your team,
          leveraging the power of React.
        </p>
        <button class="button-start">Start Free Course</button>
        <div className="info-social">
          <p>
            Tweet "Create powerful design and code components for your app and
            design system with Framer X by @MengTo"
          </p>
          <button className="button-twitter">
            <TwitterLogo />
            <span>Twitter</span>
          </button>
        </div>
      </div>
    </section>
  )
}
