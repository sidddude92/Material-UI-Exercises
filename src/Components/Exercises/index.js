import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
function Exercises({
	exercises,
	category,
	onSelect,
	exercise: {
		id,
		title = "Welcome",
		description = "Please Select a Exercise from the list on the left"
	}
}) {
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
		<div style={{ marginTop: "10px", marginBottom: "10px" }}>
			<Grid container spacing={24}>
				<Grid item xs>
					<Paper style={styles.leftPane}>
						{exercises.map(
							([group, exercises]) =>
								!category || category === group ? (
									<React.Fragment key={group}>
										<Typography variant="body">{group}</Typography>
										<List component="ul">
											{exercises.map(({ id, title }) => (
												<ListItem button onClick={() => onSelect(id)} key={id}>
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
						<Typography variant="display1">{title}</Typography>
						<Typography variant="subheading">{description}</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Exercises;
