import React from "react";
// import DynamicTab from "../components/DynamicTab";
import ItemListContainer from "@/app/components/ItemListContainer";
function Home() {
	return (
		<div className="flex items-center h-full justify-center">
			{/* <DynamicTab/> */}
			<ItemListContainer />
		</div>
	);
}

export default Home;
