"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";

function itemListContainer() {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://fakerapi.it/api/v1/products?_locale=en_US&_quantity=10")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error en el fetch");
				}
				return response.json();
			})
			.then((jsonData) => {
				setData(jsonData.data);
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
		<>
			{data.map((product) => (
				<Card
					id={product.id}
					name={product.name}
					image={product.image}
					description={product.description}
				/>
			))}
		</>
	);
}

export default itemListContainer;
