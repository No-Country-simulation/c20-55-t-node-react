"use client";
import React from "react";
import DynamicTab from "@/app/components/DynamicTab";
import Requests from "./solicitudes/page";
import PetUpdates from "./seguimiento/page";
import ItemListContainer from "@/app/components/ItemListContainer";

const sections = [
  {
    id: 1,
    name: "Solicitudes",
    title: "Solicitudes Pendientes",
    content: <Requests />,
  },
  {
    id: 2,
    name: "Mascotas",
    title: "Gestión Mascotas Disponibles",
    content: <ItemListContainer />,
  },
  {
    id: 3,
    name: "Seguimiento",
    title: "Seguimiento Post-Adopción",
    content: <PetUpdates />,
  },
];

export default function Home() {
  return (
    <main className="p-10">
      <DynamicTab sections={sections} defaultActiveSectionId={1} />
    </main>
  );
}
