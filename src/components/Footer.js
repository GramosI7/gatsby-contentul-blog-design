import React from "react"

//Style
import "../styles/Footer.scss"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__top">
          <div className="list main">
            <div className="title">
              <p>Main</p>
            </div>
            <div className="item-list">Home</div>
            <div className="item-list">Design System</div>
            <div className="item-list">Licenses</div>
            <div className="item-list">Jobs</div>
            <div className="item-list">English</div>
          </div>
          <div className="list ressource">
            <div className="title">
              <p>Ressource</p>
            </div>
            <div className="item-list">Dowloads</div>
            <div className="item-list">Angle Mockups</div>
            <div className="item-list">iOS UI Kit</div>
            <div className="item-list">Iphone X Wallpapers</div>
            <div className="item-list">5k Wallpaper</div>
          </div>
          <div className="list community">
            <div className="title">
              <p>Community</p>
            </div>
            <div className="item-list">Learn Ressources</div>
            <div className="item-list">Testimonials</div>
            <div className="item-list">Meetups</div>
            <div className="item-list">Help</div>
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
