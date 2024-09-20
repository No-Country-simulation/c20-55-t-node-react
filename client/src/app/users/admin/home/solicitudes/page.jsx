"use client";
import React, { useEffect, useState } from "react";
import image from "next/image";
import PrimaryButton from "@/app/components/PrimaryButton";
import { BASE_PATH_API } from "@/app/_config";
import Modal from "@/app/components/Modal";

const messages = {
  aprobada: {
    title: "Solicitud Aprovada",
    icon: "/images/succes_icon.svg",
    message:
      "La solicitud de adopción ha sido aprobada. El adoptante ha sido notificado y se ha iniciado el proceso de contacto ."
  },
  rechazada: {
    title: "Solicitud Rechazada",
    icon: "/images/error_icon.svg",
    message:
      "La solicitud de adopción ha sido rechazada. El adoptante ha sido informado sobre la decisión. "
  },
  moreInfo: {
    title: "Se solicitó más información",
    icon: "/images/adver_icon.svg",
    message:
      "Se ha solicitado información adicional al adoptante para la solicitud de adopción. El adoptante ha sido notificado."
  }
};

export default function Requests() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [openMessage, setOpenMessage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionMessage, setActionMessage] = useState(null);
  const [requests, setRequests] = useState(null);

  // const router = useRouter();

  const handleSelectRequest = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleChangeStatus = (id, status) => {
    (async () => {
      try {
        const response = await fetch(`${BASE_PATH_API}/application/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            status
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Success:", data);
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
    setActionMessage("");
    if (openMessage) {
      window.location.reload();
    }
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`${BASE_PATH_API}/application`);

      const data = await response.json();

      if (data.ok) {
        setRequests(data.applications.reverse());
      }
    })();
  }, []);

  return (
    <div className='p-4'>
      <h2 className='text-5xl font-bold mb-4'>Solicitudes de Adopción</h2>
      <p>Revisa y gestiona las solicitudes de adopción recibidas</p>
      <div className='bg-white rounded-lg p-4 mt-8'>
        <div className='space-y-4'>
          {requests &&
            requests.map((request) => (
              <div
                key={request.id}
                className='border border-gray-200 flex justify-between items-center rounded-lg'
                // onClick={() => handleSelectRequest(request)}
              >
                <div className='flex'>
                  <img
                    className='w-12 m-4 mx-6'
                    src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                    alt=''
                  />
                  <div className='flex flex-col justify-around'>
                    <span className='font-bold'>
                      {request.adopterInfo.name}
                    </span>
                    <span
                      className={`rounded-xl w-auto px-6 py-[.1rem] font-bold text-center ${
                        {
                          Pendiente: "bg-[#E5E5E5]",
                          Aprobada: "bg-[#B9F3BB]",
                          "Más Información": "bg-blue-300",
                          "En proceso": "bg-blue-500"
                        }[request.status] || "bg-[#FFCFCA]"
                      }`}
                    >
                      {request.status}
                    </span>
                  </div>
                </div>
                <PrimaryButton
                  text={"Ver solicitud"}
                  styles={"w-[11rem] mr-4"}
                  onClick={() => handleSelectRequest(request)}
                />
              </div>
            ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          close={handleCloseModal}
          styles={"w-[50rem]"}
          title={"Detalles de la Solicitud"}
        >
          <div class='mt-4'>
            <p>
              <strong>Nombre del Adoptante:</strong>{" "}
              {selectedRequest.adopterInfo.name}
            </p>
            <p>
              <strong>Estado:</strong> {selectedRequest.status}
            </p>
          </div>
          <div class='mt-4'>
            <h3 class='font-semibold'>Detalles:</h3>
            <div class='mt-2'>
              <button class='w-full text-left py-2 px-4 border rounded-lg flex justify-between items-center'>
                Información personal del adoptante
                <span class='text-gray-500'>V</span>
              </button>
              <button class='w-full text-left py-2 px-4 border rounded-lg flex justify-between items-center mt-2'>
                Información sobre la vivienda
                <span class='text-gray-500'>V</span>
              </button>
              <button class='w-full text-left py-2 px-4 border rounded-lg flex justify-between items-center mt-2'>
                Experiencia con mascotas
                <span class='text-gray-500'>V</span>
              </button>
            </div>
          </div>
          <div class='mt-4'>
            <p>
              Solicitud de {selectedRequest.adopterInfo.name} en espera de más
              información
            </p>
          </div>
          <div class='mt-6 flex justify-between space-x-2'>
            <div>
              <button
                class='bg-[#07323A] mr-4 text-white py-2 px-4 rounded-lg '
                onClick={() => {
                  handleChangeStatus(selectedRequest._id, "Aprobada");
                  setOpenMessage(true);
                  setActionMessage(messages.aprobada);
                }}
              >
                Aprobar
              </button>
              <button
                class='border-2 border-black font-bold py-2 px-4 rounded-lg'
                onClick={() => {
                  handleChangeStatus(selectedRequest._id, "Rechazada");
                  setOpenMessage(true);
                  setActionMessage(messages.rechazada);
                }}
              >
                Rechazar
              </button>
            </div>
            <button
              class='border-2 border-black font-bold py-2 px-4 rounded-lg '
              onClick={() => {
                handleChangeStatus(selectedRequest._id, "Más Información");
                setOpenMessage(true);
                setActionMessage(messages.moreInfo);
              }}
            >
              Solicitar más información
            </button>
          </div>
        </Modal>
      )}

      {openMessage && (
        <Modal close={handleCloseModal} styles={"w-[30rem]"}>
          <div class='flex justify-between items-center border-b pb-3'>
            <h2 class='text-xl font-semibold'>{actionMessage.title}</h2>
          </div>
          <div class='mt-4 flex flex-col items-center'>
            <div class='bg-orange-400 text-white p-2 rounded-full'>
              <img src={actionMessage.icon} alt='' className='w-6 h-6' />
            </div>
            <p class='text-center'>{actionMessage.message}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}
