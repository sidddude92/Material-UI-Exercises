import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
	FormControl: {
		width: 500
	}
});

class Create extends React.Component {
	state = {
		open: false,
		exercise: {
			title: "",
			description: "",
			muscles: ""
		}
	};
	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleChange = name => ({ target: { value } }) => {
		this.setState({
			exercise: {
				...this.state.exercise,
				[name]: value
			}
		});
	};

	handleSubmit = () => {
		//TODO Validation
		const { exercise } = this.state;
		this.props.onCreate({
			...exercise,
			id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
		});

		this.setState({
			open: false,
			exercise: {
				title: "",
				description: "",
				muscles: ""
			}
		});
	};

	render() {
		const {
			exercise: { title, description, muscles }
		} = this.state;

		const { categories, classes } = this.props;
		return (
			<React.Fragment>
				<Button
					onClick={this.handleClickOpen}
					variant="fab"
					color="secondary"
					aria-label="Add"
					mini>
					<AddIcon />
				</Button>

				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">
						Create a New Exercise
					</DialogTitle>
					<DialogContent>
						<DialogContentText>Please Fill Out the Form</DialogContentText>
						<form noValidate autoComplete="off">
							<TextField
								label="Title"
								placeholder="Enter a Exercise Name"
								value={title}
								onChange={this.handleChange("title")}
								margin="normal"
								className={classes.FormControl}
							/>
							<br />
							<FormControl className={classes.FormControl}>
								<InputLabel htmlFor="muscles">Muscles</InputLabel>
								<Select value={muscles} onChange={this.handleChange("muscles")}>
									{categories.map(category => (
										<MenuItem key={category} value={category}>
											{category}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<br />
							<TextField
								className={classes.FormControl}
								label="Description"
								multiline
								rows="4"
								placeholder="Enter a Description"
								value={description}
								onChange={this.handleChange("description")}
								margin="normal"
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button
							color="primary"
							variant="raised"
							onClick={this.handleSubmit}>
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Create);
