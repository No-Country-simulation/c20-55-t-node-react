'use client';
import React, { useState } from 'react';

export default function PetUpdates() {
  const [view, setView] = useState('visits'); // 'visits' or 'feedback'

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Seguimiento Post-Adopción</h2>
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${view === 'visits' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600`}
          onClick={() => handleViewChange('visits')}
        >
          Programación de Visitas
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${view === 'feedback' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600`}
          onClick={() => handleViewChange('feedback')}
        >
          Feedback de Adoptantes
        </button>
      </div>

      {view === 'visits' && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Programación y Gestión de Visitas</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Fecha de Visita:</label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Hora de Visita:</label>
              <input
                type="time"
                className="border border-gray-300 rounded-lg w-full p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Notas:</label>
              <textarea
                className="border border-gray-300 rounded-lg w-full p-2"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Guardar Visita
            </button>
          </form>
        </div>
      )}

      {view === 'feedback' && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Feedback de Adoptantes</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Frecuencia de Feedback:</label>
              <select
                className="border border-gray-300 rounded-lg w-full p-2"
                required
              >
                <option value="weekly">Semanal</option>
                <option value="monthly">Mensual</option>
                <option value="custom">Personalizado</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Método de Envío:</label>
              <select
                className="border border-gray-300 rounded-lg w-full p-2"
                required
              >
                <option value="photo">Foto</option>
                <option value="video">Video</option>
                <option value="both">Ambos</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Notas:</label>
              <textarea
                className="border border-gray-300 rounded-lg w-full p-2"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Guardar Feedback
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
