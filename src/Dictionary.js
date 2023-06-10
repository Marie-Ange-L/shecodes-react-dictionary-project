import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState(null);
	let [photos, setPhotos] = useState([]);

	function handleDictionaryResponse(response) {
		setResults(response.data);
		if (response.data.message === "Word not found") {
			alert("❗Word not found❗ Please enter a new word 🤓");
			window.location.reload();
		} else {
			return null;
		}
	}

	function handleImagesResponse(response) {
		setPhotos(response.data.photos);
	}

	function handleErrorResponse(error) {
		alert("❗Word not found❗ Please enter a new word 🤓");
	}

	function search(event) {
		event.preventDefault();
		document.getElementById("myInput").blur();
		const apiKey = "c0ca36f1te5cd0bd24a89c30e4524bbo";
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
		axios.get(apiUrl).then(handleDictionaryResponse).catch(handleErrorResponse);

		const imgApiKey = "c0ca36f1te5cd0bd24a89c30e4524bbo";
		let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
		axios.get(imgApiUrl).then(handleImagesResponse);
	}

	function clearInput() {
		document.getElementById("myInput").value = "";
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<p className="intro">What word do you want to look up?</p>
			<form onSubmit={search}>
				<input
					type="search"
					onClick={clearInput}
					onChange={handleKeywordChange}
					placeholder="Type a word..."
					id="myInput"
				/>
			</form>
			<Results results={results} />
			<Photos photos={photos} />
		</div>
	);
}
