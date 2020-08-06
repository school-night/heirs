import React from "react"
import Nav from "../../components/nav"
import Header from "../../components/header"
import { Link } from "gatsby"

export default function Home() {
  return <div>
      <Nav />
      <Header />
      <p>
        J.Cole - Middle Child
      </p>
      <Link to="/work/">Back to Work</Link>
  </div>
}
