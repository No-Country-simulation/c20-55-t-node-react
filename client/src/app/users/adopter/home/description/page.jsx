"use client";

import Link from "next/link";
import React from "react";

function ItemDescription() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
			<h2>detalle</h2>
			<Link href={"/users/adopter/home"}>volver</Link>
		</div>
	);
}

export default ItemDescription;
