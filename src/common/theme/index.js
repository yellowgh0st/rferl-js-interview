import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
	components: {
		MuiIconButton: {
			defaultProps: {
				disableRipple: true,
			}
		},
		MuiListItemButton: {
			defaultProps: {
        disableRipple: true,
      },
			styleOverrides: {
				root: {
					background: '#aeaeea17',
					borderRadius: '9px',
					'&:hover': {
						background: "#aeaeea26",
				 },
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					backgroundColor: '#181820',
				},
			},
		},
	},
})

export { theme }