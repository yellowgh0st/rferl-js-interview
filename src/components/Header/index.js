import React, { useState } from 'react'
import { IconButton, Fade } from "@mui/material"
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { navigate } from 'gatsby'

export const Header = ({ siteTitle }) => {
	const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

return(
  <header>
    <a href="#">
      {siteTitle}
    </a>
		<IconButton
			aria-label="display more options"
			color="secondary"
			id="fade-button"
			aria-controls={open ? 'fade-menu' : undefined}
			aria-haspopup="true"
			aria-expanded={open ? 'true' : undefined}
			onClick={handleClick}
		>
  		<MoreHorizIcon/>
		</IconButton>
		<Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => {
					setAnchorEl(null)
					navigate("#tags=red,blue,purple")
				}}>Use sample tags</MenuItem>
				<MenuItem onClick={() => {
					setAnchorEl(null)
					navigate("#")
				}}>Clear everything</MenuItem>
      </Menu>
  </header>
)}