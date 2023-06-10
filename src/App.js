import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./bookshelf.png";

export default function App() {
	return (
		<div className="App">
			<header>
				<img src={logo} alt="Logo" className="App-logo img-fluid" />
			</header>
			<main>
				<Dictionary />
			</main>
			<footer>
				<p>
					Project coded by{" "}
					<a
						href="https://www.linkedin.com/in/marie-ange-lhernould/"
						target="_blank"
						rel="noreferrer"
					>
						Marie-Ange L.
					</a>{" "}
					using SheCodes Dictionary and Images APIs — See on{" "}
					<a
						href="https://github.com/Marie-Ange-L/shecodes-react-dictionary-project"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
					.
				</p>
				<p className="App-img-credit">
					• Top image by{" "}
					<a
						href="https://www.freepik.com/free-vector/flat-colorful-books-plants-stand-bookshelf_37476481.htm#query=illustrations%20bookshelf&position=42&from_view=search&track=ais"
						target="_blank"
						rel="noreferrer"
					>
						redgreystock
					</a>{" "}
					on Freepik •
				</p>
			</footer>
		</div>
	);
}
