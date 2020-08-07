import React from "react"
import { Link } from "gatsby"
import Logo from "../assets/heirs-logo-white.svg"

export default function Home() {
  return (
    <div>
      <Link to="/">
        <img src={Logo} alt="HEIRS" height="100" />
      </Link>
    </div>
  )
}
