import * as React from "react"
import { useTitle } from "../../hooks"
import { Box } from "@mui/system"
import { ThemeProvider } from '@mui/material/styles'
import { Header } from "../"
import "../../styles/index.scss"
import { defaults, theme } from "../../common"

export const App = ({ children }) => {

	const { title } = useTitle()
	
  return (
		<ThemeProvider theme={theme}>
			<Box
				display='flex'
				flexDirection='row'
				justifyContent='center'
			>
				<Box
					display='flex'
					flexDirection='column'
					width='100%'
					height='calc(100vh - 6rem)'
					maxWidth={defaults.layout.container.md.width}
					padding={defaults.layout.container.md.padding}
				>
					<Header siteTitle={title} />
					{children}
				</Box>
			</Box>
		</ThemeProvider>
  )
}