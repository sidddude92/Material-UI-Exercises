import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Create from "../Exercises/Dialogs/Create";
function Header({ muscles, onExerciseCreated }) {
	return (
		<AppBar position="static" color="primary">
			<Toolbar>
				<Typography variant="title" color="inherit" style={{ flex: 1 }}>
					Exercises
				</Typography>
				<Create categories={muscles} onCreate={onExerciseCreated} />
			</Toolbar>
		</AppBar>
	);
}

export default Header;
