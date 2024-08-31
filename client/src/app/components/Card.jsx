import React from "react";
import Link from "next/link";

function Card({ title, image, description }) {
	return (
		<Link href={{ pathname: "/itemDescription", query: { description } }}>
			<div className="h-[350px] w-[300px] flex flex-col border border-black">
				<div className="h-[25%] w-[90%] mx-auto">
					<h3 className="flex h-full w-full items-center justify-center text-center">
						{title}
					</h3>
				</div>
				<div className="h-[70%] w-full flex flex-col items-center justify-center">
					<img
						src={image}
						alt={`${title} image`}
						className="w-[90%] aspect-square"
					/>
				</div>
			</div>
		</Link>
	);
}

export default Card;
