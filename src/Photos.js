import React from "react";
import "./Photos.css";

export default function Photos(props) {
	if (props.photos.length) {
		return (
			<section className="Photos">
				<div className="row">
					{props.photos.map(function (photo, index) {
						return (
							<div className="col-sm-4" key="index">
								<a href={photo.url} target="_blank" rel="noreferrer">
									<img
										src={photo.src.landscape}
										key="index"
										className="img-fluid"
										alt={photo.alt}
										title="Click to see original photo on Pexels.com"
									/>
								</a>
							</div>
						);
					})}
				</div>
			</section>
		);
	} else {
		return null;
	}
}
