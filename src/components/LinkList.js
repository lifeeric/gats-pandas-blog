import React from "react"
import { Link } from "gatsby"

export default function LinkList({ to, children }) {
  return (
    <li style={{display: `inline-block`, marginRight: `1rem`}}>
      <Link to={to}>{children}</Link>{" "}
    </li>
  )
}
