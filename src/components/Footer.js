import React from "react"

//Style
import "../styles/Footer.scss"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__top">
          <div className="list main">
            <ul>
              <div className="title">
                <p>Main</p>
              </div>
              <li>Home</li>
              <li>Design System</li>
              <li>Licenses</li>
              <li>Jobs</li>
              <li>English</li>
            </ul>
          </div>
          <div className="list ressource">
            <ul>
              <div className="title">
                <p>Ressource</p>
              </div>
              <li>Dowloads</li>
              <li>Angle Mockups</li>
              <li>iOS UI Kit</li>
              <li>Iphone X Wallpapers</li>
              <li>5k Wallpaper</li>
            </ul>
          </div>
          <div className="list community">
            <ul>
              <div className="title">
                <p>Community</p>
              </div>
              <li>Learn Ressources</li>
              <li>Testimonials</li>
              <li>Meetups</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <p>
            Backgrounds made in Cinema 4D, iOS app in Swift, site in React.
            Email us to ask anything. © 2020
          </p>
          <div className="terms">Terms of Service - Privacy Policy</div>
        </div>
      </div>
    </footer>
  )
}
