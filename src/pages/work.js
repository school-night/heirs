import React from "react"
import Nav from "../components/nav"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return <div>
      <Nav />
      <Header />
      <p>
        Work
      </p>
      <ul>
        <li><Link to="/work/middle-child/">J.Cole - Middle Child</Link></li>
        <li><Link to="/work/mood/">SiR - Mood</Link></li>
        <li><Link to="/work/puma/">PUMA x J.Cole</Link></li>
      </ul>
  </div>
}
