'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const mockRequests = [
  {
    id: 1,
    adopterName: 'Juan Pérez',
    status: 'Pendiente',
    details: 'Detalles adicionales sobre la solicitud de Juan Pérez.',
  },
  {
    id: 2,
    adopterName: 'Ana Gómez',
    status: 'Aprobada',
    details: 'Detalles adicionales sobre la solicitud de Ana Gómez.',
  },
  {
    id: 3,
    adopterName: 'Carlos Fernández',
    status: 'Rechazada',
    details: 'Detalles adicionales sobre la solicitud de Carlos Fernández.',
  },
];

export default function Requests() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionMessage, setActionMessage] = useState('');

  const handleSelectRequest = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
    setActionMessage('');
  };

  const handleAction = (action) => {
    if (selectedRequest) {
      // Aca iría la lógica para enviar la notificación al adoptante
      setActionMessage(`Solicitud de ${selectedRequest.adopterName} ${action === 'approve' ? 'aprobada' : action === 'reject' ? 'rechazada' : 'en espera de más información'}.`);
      setIsModalOpen(false);
      setSelectedRequest(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Solicitudes Pendientes</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <ul className="space-y-4">
          {mockRequests.map((request) => (
            <li
              key={request.id}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectRequest(request)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">Nombre del Adoptante:</span>
                <span>{request.adopterName}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-semibold">Estado:</span>
                <span className={`text-${request.status === 'Pendiente' ? 'yellow-500' : request.status === 'Aprobada' ? 'green-500' : 'red-500'}`}>
                  {request.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <h2 className="text-2xl font-semibold mb-4">Detalles de la Solicitud</h2>
            {selectedRequest && (
              <>
                <p><strong>Nombre del Adoptante:</strong> {selectedRequest.adopterName}</p>
                <p><strong>Estado:</strong> {selectedRequest.status}</p>
                <p className="mt-4"><strong>Detalles:</strong> {selectedRequest.details}</p>
                <div className="mt-6 flex gap-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    onClick={() => handleAction('approve')}
                  >
                    Aprobar
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() => handleAction('reject')}
                  >
                    Rechazar
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => handleAction('requestInfo')}
                  >
                    Solicitar más información
                  </button>
                </div>
              </>
            )}
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
            {actionMessage && <p className="mt-4 text-center text-green-500">{actionMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
