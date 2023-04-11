import React, { useState } from 'react'
import { Typography, List as TagList, ListItem,
	ListItemButton, ListItemIcon, ListItemText, Checkbox, Box } from "@mui/material"
import { useUrlHashParams } from "../../hooks"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { navigate } from "gatsby";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const TagItem = (props) => {

	const [Icon, setIcon] = useState(CheckBoxOutlineBlankIcon)

	const submit = () => navigate(
		`#tags=${props.data.filter(item => item !== props.value).toString()}`
	)

	return (
		<ListItem
			sx={{
				padding: 0,
			}}
			onClick={() => submit()}
		>
			<ListItemButton>
				<ListItemIcon
					sx={{
						justifyContent: 'center',
						marginRight: '7px',
					}}
					onMouseDown={() => setIcon(CheckBoxIcon)}
					onMouseUp={() => {
						setIcon(CheckBoxOutlineBlankIcon)
						submit()
					}}
					onMouseLeave={() => {
						setIcon(CheckBoxOutlineBlankIcon)
					}}
				>
					<Icon/>
				</ListItemIcon>
				<ListItemText id='1' primary={props.value} />
			</ListItemButton>
		</ListItem>
)}

export const Tags = (props) => {

	const data = useUrlHashParams(props.data)

	return (
		<>
			<Typography variant="h6">Tags</Typography>
			<TagList
				sx={{
					display: 'flex',
					gap: '0.9rem',
					flexDirection: 'column',
					height: '100%',
				}}
			>
			{Object.values(data).length > 0 &&
				Object.values(data)[0]
				.map((value, index) => 
					<TagItem 
					key={index}
					value={value}
					data={Object.values(data)[0]}
					/>
				)
			}
			{Object.values(data).length <= 0 &&
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					gap='0.5rem'
					fontStyle='italic'
					height='100%'
					fontSize='1.3rem'
					fontWeight='300'
					justifyContent='center'
					sx={{
						opacity: 0.7
					}}

				>
					<AddCircleOutlineOutlinedIcon
						sx={{
							fontSize: '3rem',
							opacity: '0.4',
						}}
					/>
					{`Add tags../#`}
				</Box>
			}
			</TagList>
		</>
)}