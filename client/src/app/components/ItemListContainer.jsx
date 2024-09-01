"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";
import { animales } from "./animales-en-adopcion";

function itemListContainer() {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	const [mascotas, setMascotas] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			try {
				setData(animales);
				setMascotas(animales);
				setLoading(false);
			} catch (error) {
				setError("Error loading data");
				setLoading(false);
			}
		}, 100);
	}, []);

	if (loading) {
		return <p>Cargando...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}
	const gatos = data.filter((animal) => animal.Especie == "Gato");
	const perros = data.filter((animal) => animal.Especie == "Perro");
	const todos = data.map((animal) => animal);

	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-center gap-[30px] w-full">
				<button
					onClick={() => {
						setMascotas(todos);
					}}
				>
					Todos
				</button>
				<button
					onClick={() => {
						setMascotas(perros);
					}}
				>
					Perros
				</button>
				<button
					onClick={() => {
						setMascotas(gatos);
					}}
				>
					Gatos
				</button>
			</div>
			<div className="flex flex-wrap justify-center gap-[30px] w-[80%] my-[50px]">
				{mascotas.map((animal) => (
					<Card
						id={animal.id}
						title={animal.Nombre}
						image={animal.Foto}
						description={animal.description}
					/>
				))}
			</div>
		</div>
	);
}

export default itemListContainer;
