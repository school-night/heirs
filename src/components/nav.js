import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return <div>
    <ul>
      <li><Link to="/work/">Work</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>
  </div>
}
