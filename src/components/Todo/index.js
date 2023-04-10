import * as React from "react"
import { Typography, List as TodoList, ListItem,
	ListItemButton, ListItemIcon, ListItemText, Checkbox } from "@mui/material"

const TodoItem = () => (
	<ListItem
		sx={{
			padding: 0,
		}}
	>
		<ListItemButton>
			<ListItemIcon>
				<Checkbox
					color='secondary'
					edge="start"
					tabIndex={-1}
					disableRipple
				/>
			</ListItemIcon>
			<ListItemText id='1' primary={`Line item 1`} />
		</ListItemButton>
	</ListItem>
)

export const Todo = () => (
  <>
		<Typography variant="h6">Todo's</Typography>
		<TodoList>
			<TodoItem/>
		</TodoList>
	</>
)