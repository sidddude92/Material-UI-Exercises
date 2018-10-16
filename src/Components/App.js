import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Exercises from "./Exercises/index";
import { muscles, exercises } from "../store.js";
import "./styles.css";

class App extends React.Component {
	state = { exercises, exercise: {} };

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

	handleExerciseSelected = id => {
		this.setState(({ exercises }) => ({
			exercise: exercises.find(ex => ex.id === id)
		}));
	};
	render() {
		const exercises = this.getExercisesByMuscles();
		const { category, exercise } = this.state;
		return (
			<div className="App">
				<Header />
				<Exercises
					exercise={exercise}
					exercises={exercises}
					category={category}
					onSelect={this.handleExerciseSelected}
				/>
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
