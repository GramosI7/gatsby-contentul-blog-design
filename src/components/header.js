import React from "react"
import "../styles/Header.scss"

const Header = () => (
  <header>
    <div className="container">
      <h1>
        <span className="framer bg-blue-text">Framer</span>
        <br />
        <span className="motion bg-blue-text">Motion</span>
        <span className="in">In</span>
        <br />
        <span className="react">ReactJS</span>
      </h1>
      <div className="content-right">
        <div className="content-right__image">
          <img
            src="https://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png"
            alt="logo react"
          />
          <img
            src="https://d33wubrfki0l68.cloudfront.net/2907b48943617c25a31124fdf2f1e5f2bfc82879/94879/images/framer-x/icon-cross-thin.svg"
            alt="cross"
          />
          <img
            src="https://designcode.io/images/framer-x/framer-logo.png"
            alt="logo react"
          />
        </div>
        <p>
          Create powerful design and code components for your app and design
          system
        </p>
        <button>See just below</button>
      </div>
    </div>
  </header>
)

export default Header
