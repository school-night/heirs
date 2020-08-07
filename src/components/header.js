import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
import Logo from "../assets/heirs-logo-white.svg"

export default function Home() {
  return (
    <div className="header">
      <div className="nav-area">
        <Nav />
      </div>
      <div className="logo-area">
        <Link to="/">
          <img src={Logo} alt="HEIRS" height="100" />
        </Link>
      </div>
    </div>
  )
}
