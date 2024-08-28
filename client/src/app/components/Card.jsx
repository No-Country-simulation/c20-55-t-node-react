import React from "react";
import Link from "next/link";
import "./card.css";

function Card({ id, title, image, description }) {
	return (
		<div className="card" key={id}>
			<div className="card-title">
				<h3>{title}</h3>
			</div>
			<div className="card-body">
				<img src={image} alt={`${title}-image`} />
			</div>
			<div className="botones-accion">
				{/* <Link href={`/item-detail`}>Ver</Link> */}
			</div>
		</div>
	);
}

export default Card;
