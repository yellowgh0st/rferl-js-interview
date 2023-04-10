import * as React from "react"
import { useTitle } from "../../hooks"
import { Box } from "@mui/system"
import { Header } from "../"
import "../../styles/index.scss"
import { defaults } from "../../common"

export const App = ({ children }) => {

	const { title } = useTitle()

  return (
    <Box
			display='flex'
			flexDirection='row'
			justifyContent='center'
		>
			<Box
				display='flex'
				flexDirection='column'
				width='100%'
				height='100vh'
				maxWidth={defaults.layout.container.md.width}
				padding={defaults.layout.container.md.padding}
			>
      	<Header siteTitle={title} />
				{children}
			</Box>
    </Box>
  )
}