"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import PrimaryButton from "@/app/components/PrimaryButton";
import { BASE_PATH_API } from "@/app/_config";

const mockRequests = [
  {
    id: 1,
    adopterName: "Juan Pérez",
    status: "Pendiente",
    details: "Detalles adicionales sobre la solicitud de Juan Pérez.",
  },
  {
    id: 2,
    adopterName: "Ana Gómez",
    status: "Aprobada",
    details: "Detalles adicionales sobre la solicitud de Ana Gómez.",
  },
  {
    id: 3,
    adopterName: "Carlos Fernández",
    status: "Rechazada",
    details: "Detalles adicionales sobre la solicitud de Carlos Fernández.",
  },
];

export default function Requests() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionMessage, setActionMessage] = useState("");
  const [requests, setRequests] = useState(null);

  const handleSelectRequest = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
    setActionMessage("");
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`${BASE_PATH_API}/application`);

      const data = await response.json();

      if (data.ok) {
        console.log(data.applications);
        setRequests(data.applications);
      }
    })();
  }, []);

  const handleAction = (action) => {
    if (selectedRequest) {
      // Aca iría la lógica para enviar la notificación al adoptante
      setActionMessage(
        `Solicitud de ${selectedRequest.adopterName} ${
          action === "approve"
            ? "aprobada"
            : action === "reject"
            ? "rechazada"
            : "en espera de más información"
        }.`
      );
      setIsModalOpen(false);
      setSelectedRequest(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Solicitudes de Adopción</h2>
      <p>Revisa y gestiona las solicitudes de adopción recibidas</p>
      <div className="bg-white rounded-lg p-4 mt-8">
        <div className="space-y-4">
          {requests &&
            requests.map((request) => (
              <div
                key={request.id}
                className="border border-gray-200 flex justify-between items-center rounded-lg"
                onClick={() => handleSelectRequest(request)}
              >
                <div className="flex">
                  <img
                    className="w-12 m-4 mx-6"
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt=""
                  />
                  <div className="flex flex-col justify-around">
                    <span className="font-bold">
                      {request.adopterInfo.name}
                    </span>
                    <span
                      className={`rounded-xl w-auto px-6 py-[.1rem] font-bold text-center ${
                        {
                          Pendiente: "bg-[#E5E5E5]",
                          Aprobada: "bg-[#B9F3BB]",
                          "Más Información": "bg-blue-300",
                        }[request.status] || "bg-[#FFCFCA]"
                      }`}
                    >
                      {request.status}
                    </span>
                  </div>
                </div>
                <PrimaryButton text={"Ver solicitud"} styles={"w-[13rem]"} />
              </div>
            ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <p>hola</p>
      )}
    </div>
  );
}
