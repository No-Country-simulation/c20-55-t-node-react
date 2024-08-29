"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./itemListContainer.css";

function itemListContainer() {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error en el fetch");
				}
				return response.json();
			})
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p>Cargando...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<div className="item-list flex flex-col items-center justify-center">
			{data.map((product) => (
				<Card
					id={product.id}
					title={product.title}
					image={product.image}
					description={product.description}
				/>
			))}
		</div>
	);
}

export default itemListContainer;
