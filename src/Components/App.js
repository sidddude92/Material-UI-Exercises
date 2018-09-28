import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Exercises from "./Exercises/index";
import {
	muscles,
	exercises
} from "../store.js";
import "./styles.css";

class App extends React.Component {
	state = { exercises };

	getExercisesByMuscles = () => {
		return Object.entries(
			this.state.exercises.reduce(
				(exercises, exercise) => {
					const { muscles } = exercise;
					exercises[muscles] = exercises[
						muscles
					]
						? [
								...exercises[muscles],
								exercise
						  ]
						: [exercise];
					return exercises;
				},
				{}
			)
		);
	};
	render() {
		const exercises = this.getExercisesByMuscles();
		return (
			<div className="App">
				<Header />
				<Exercises exercises={exercises} />
				<Footer muscles={muscles} />
			</div>
		);
	}
}

export default App;
