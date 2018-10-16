import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
class Create extends React.Component {
	state = {
		open: false
	};
	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
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
						<form>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="Email Address"
								type="email"
								fullWidth
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button color="primary">Create</Button>
					</DialogActions>
				</Dialog>
			</React.Fragment>
		);
	}
}

export default Create;
