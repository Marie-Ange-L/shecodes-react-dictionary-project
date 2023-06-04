import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	return (
		<div>
			<h3>
				<span>{props.meaning.partOfSpeech}</span>
			</h3>
			<p>
				{props.meaning.definition}
				<br />
				<em>{props.meaning.example}</em>
			</p>
			<Synonyms synonyms={props.meaning.synonyms} />
		</div>
	);
}
