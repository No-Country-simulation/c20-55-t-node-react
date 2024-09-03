"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React from "react";

function ItemDescription() {
	const searchParams = useSearchParams();
	const descripcion = searchParams.get("descripcion");

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
			<h2>Detalle</h2>
			<p>{descripcion || "No hay descripción disponible"}</p>
			<Link href="/users/adopter/home">Volver</Link>
		</div>
	);
}

export default ItemDescription;
