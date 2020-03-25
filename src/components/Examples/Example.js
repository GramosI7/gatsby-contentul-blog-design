import React from "react"
import Image from "gatsby-image"

// Style
import "../../styles/Examples/Example.scss"

export default function Example({ info, direction }) {
  console.log(info, direction)
  if (direction === "left") {
    return (
      <div className="example">
        <div className="text left">{info.text}</div>
        <Image className="image" fluid={info.image.fluid} />
      </div>
    )
  }

  return (
    <div className="example right">
      <Image className="image" fluid={info.image.fluid} />
      <div className="text right">{info.text}</div>
    </div>
  )
}
