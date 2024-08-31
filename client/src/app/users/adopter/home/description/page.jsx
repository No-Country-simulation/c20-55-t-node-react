"use client";

import Link from "next/link";
import React from "react";

function ItemDescription() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
			<h1 className="text-2xl font-bold mb-4">Descripción del Ítem</h1>
			{/* <p className="text-lg text-center">{description}</p> */}
			<Link href={"/users/adopter/home"}>Volver</Link>
		</div>
	);
}

export default ItemDescription;
