import React from "react";

function Card() {
	return (
		<>
			<div className="card">
				<div className="card-title">
					<h3>Titulo</h3>
				</div>
				<div className="card-body">
					<img src="" alt="mascota-image" />
					<p>Descripcion</p>
				</div>
				<div className="botones-accion">
					<button>ver</button>
				</div>
			</div>
		</>
	);
}

export default Card;
