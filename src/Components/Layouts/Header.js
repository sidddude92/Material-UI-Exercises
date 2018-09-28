import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
function Header() {
	return (
		<AppBar position="static" color="primary">
			<Toolbar>
				<Typography
					variant="title"
					color="inherit">
					Exercises
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
