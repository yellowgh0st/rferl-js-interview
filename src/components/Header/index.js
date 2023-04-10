import * as React from "react"
import { IconButton } from "@mui/material"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

export const Header = ({ siteTitle }) => (
  <header>
    <a href="#">
      {siteTitle}
    </a>
		<IconButton
			aria-label="display more options"
			disableRipple
			disableTouchRipple
			disableFocusRipple
			color='secondary'
		>
  		<MoreHorizIcon/>
		</IconButton>
  </header>
)