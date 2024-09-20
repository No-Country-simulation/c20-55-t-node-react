import React from "react";
import ItemListContainer from "../../../components/ItemListContainer";
import DynamicTab from "@/app/components/DynamicTab";
import ComoAdoptar from "@/app/components/ComoAdoptar";

function Home() {
  const sections = [
    {
      id: 1,
      name: "Tab 1",
      title: "Title for Tab 1",
      content: <ItemListContainer /> // Pasa ComponentA como contenido
    },
    {
      id: 2,
      name: "Tab 2",
      title: "Title for Tab 2",
      content: <ComoAdoptar /> // Pasa ComponentB como contenido
    }
  ];

  return (
    <div className='container mx-auto p-6'>
      {/* <h1 className='text-3xl font-bold mb-6'>Dynamic Tabs with Components</h1> */}
      {/* <DynamicTab sections={sections} defaultActiveSectionId={1} /> */}
      <ItemListContainer adopt={1} />
    </div>
  );
}

export default Home;
