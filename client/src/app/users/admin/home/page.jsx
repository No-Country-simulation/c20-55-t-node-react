"use client";
import React from "react";
import DynamicTab from "@/app/components/DynamicTab";
import Requests from "./solicitudes/page";
import PetUpdates from "./seguimiento/page";
import AvailablePets from "./mascotas/page";

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
    content: <AvailablePets />,
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
