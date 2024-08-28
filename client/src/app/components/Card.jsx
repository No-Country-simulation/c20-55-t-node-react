import React, { useState } from "react";
import "./card.css";

function Card({ id, title, image, description }) {
	const [card, setCard] = useState(true);
	if (card) {
		return (
			<button
				onClick={() => {
					setCard(false);
				}}
			>
				<div className="card" key={id}>
					<div className="card-title">
						<h3>{title}</h3>
					</div>
					<div className="card-body">
						<img src={image} alt={`${title}-image`} />
					</div>
					<div className="botones-accion"></div>
				</div>
			</button>
		);
	} else if (!card) {
		return (
			<div className="card" key={id}>
				<div className="botones-accion">
					<button
						onClick={() => {
							setCard(true);
						}}
					>
						volver
					</button>
				</div>
				<div className="card-body">
					<p>{description}</p>
				</div>
			</div>
		);
	}
}

export default Card;
