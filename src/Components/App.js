import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Exercises from "./Exercises/index";
import { muscles, exercises } from "../store.js";
import "./styles.css";

class App extends React.Component {
	state = { exercises };

	getExercisesByMuscles = () => {
		return Object.entries(
			this.state.exercises.reduce((exercises, exercise) => {
				const { muscles } = exercise;
				exercises[muscles] = exercises[muscles]
					? [...exercises[muscles], exercise]
					: [exercise];
				return exercises;
			}, {})
		);
	};

	handleCategorySelected = category => {
		this.setState({ category });
	};
	render() {
		const exercises = this.getExercisesByMuscles();
		const { category } = this.state;
		return (
			<div className="App">
				<Header />
				<Exercises exercises={exercises} />
				<Footer
					muscles={muscles}
					onSelect={this.handleCategorySelected}
					category={category}
				/>
			</div>
		);
	}
}

export default App;
