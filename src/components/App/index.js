import * as React from "react"
import { useTitle } from "../../hooks"
import { Header } from ".."
import "../../styles/index.scss"

export const App = ({ children }) => {

	const { title } = useTitle()

  return (
    <>
      <Header siteTitle={title} />
			{children}
			<footer>
				© {new Date().getFullYear()} &middot;
				{` `}
				<a href="#">Augustin Berisa</a>
			</footer>
    </>
  )
}