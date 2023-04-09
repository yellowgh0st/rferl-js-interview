import * as React from "react"
import { Link } from "gatsby"

export const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
    >
      {siteTitle}
    </Link>
  </header>
)