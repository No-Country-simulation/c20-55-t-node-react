import React from "react";

function Card({ id, name, image, description }) {
	return (
		<>
			<div className="card" key={id}>
				<div className="card-title">
					<h3>{name}</h3>
				</div>
				<div className="card-body">
					<img src={image} alt={`${name}-image`} />
					<p>{description}</p>
				</div>
				<div className="botones-accion">
					<button>Ver</button>
				</div>
			</div>
		</>
	);
}

export default Card;
