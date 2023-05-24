import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App">
			<header>Dictionary</header>
			<main>
				<Dictionary />
			</main>
			<footer>
				SheCodes project coded by{" "}
				<a
					href="https://www.linkedin.com/in/marie-ange-lhernould/"
					target="_blank"
					rel="noreferrer"
				>
					Marie-Ange L.
				</a>{" "}
				— See on{" "}
				<a
					href="https://github.com/Marie-Ange-L/shecodes-react-dictionary-project"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				.
			</footer>
		</div>
	);
}
