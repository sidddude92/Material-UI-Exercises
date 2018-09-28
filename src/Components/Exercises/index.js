import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
function Exercises({ exercises }) {
	const styles = {
		leftPane: {
			padding: "10px",
			textTransform: "capitalize"
		},
		rightPane: {
			padding: "10px"
		}
	};
	return (
		<div style={{ marginTop: "10px", marginBottom: "10px" }}>
			<Grid container spacing={24}>
				<Grid item xs>
					<Paper style={styles.leftPane}>
						{exercises.map(([group, exercises]) => (
							<React.Fragment>
								<Typography variant="body">{group}</Typography>
								<List component="ul">
									{exercises.map(({ title }) => (
										<ListItem button>
											<ListItemText primary={title} />
										</ListItem>
									))}
								</List>
							</React.Fragment>
						))}
					</Paper>
				</Grid>

				<Grid item xs>
					<Paper style={styles.rightPane}>Right Pane</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Exercises;
