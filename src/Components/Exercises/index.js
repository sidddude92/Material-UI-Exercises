import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
function Exercises({ exercises, category }) {
	const styles = {
		leftPane: {
			padding: "10px",
			textTransform: "capitalize",
			height: 500,
			overflowY: "auto"
		},
		rightPane: {
			padding: "10px",
			height: 500
		}
	};
	return (
		<div
			style={{
				marginTop: "10px",
				marginBottom: "10px"
			}}>
			<Grid container spacing={24}>
				<Grid item xs>
					<Paper style={styles.leftPane}>
						{exercises.map(
							([group, exercises]) =>
								!category || category === group ? (
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
								) : null
						)}
					</Paper>
				</Grid>

				<Grid item xs>
					<Paper style={styles.rightPane}>
						<Typography variant="display1">Welcome</Typography>
						<Typography variant="subheading">
							Please Select a Exercise from the list on the left
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Exercises;
