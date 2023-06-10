import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		setResults(response.data);
		if (response.data.message === "Word not found") {
			alert("❗Word not found❗ Please enter a new word 🤓");
			window.location.reload();
		} else {
			return null;
		}
	}

	function handleErrorResponse(error) {
		alert("❗Word not found❗ Please enter a new word 🤓");
	}

	function search(event) {
		event.preventDefault();
		const apiKey = "c0ca36f1te5cd0bd24a89c30e4524bbo";
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse).catch(handleErrorResponse);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}
	return (
		<div className="Dictionary">
			<p class="intro">What word do you want to look up?</p>
			<form onSubmit={search}>
				<input
					type="search"
					onChange={handleKeywordChange}
					placeholder="Type a word..."
				/>
			</form>
			<Results results={results} />
		</div>
	);
}
