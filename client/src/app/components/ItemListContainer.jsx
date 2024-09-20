"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";
import { BASE_PATH_API } from "../_config";
import images from "next/image";

function ItemListContainer({ adopt = 0 }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${BASE_PATH_API}/pet`);

      const data = await response.json();

      if (data.ok) {
        setData(data.pets);
        setMascotas(data.pets);
        setLoading(false);
      } else {
        console.log(data);
      }
    })();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const gatos = data.filter((animal) => animal.specie == "gato");
  const perros = data.filter((animal) => animal.specie == "perro");
  const todos = data.map((animal) => animal);

  return (
    <div className='flex flex-col items-center'>
      <div className='text-center'>
        <p className='text-[2rem]'>Encuentra tu nuevo Compañero</p>
        <p>Dale un hogar a un amigo peludo que está esperando por ti</p>
      </div>
      <div className='flex items-center justify-center gap-[30px] w-full mt-7'>
        <button
          className='border border-gray-100 py-5 px-10 rounded-lg shadow-md'
          onClick={() => {
            setMascotas(todos);
          }}
        >
          <img
            className='w-[5rem] h-[4.5rem]'
            src='/images/pets_icon.svg'
            alt=''
          />
          Todos
        </button>
        <button
          className='border border-gray-100 py-5 px-10 rounded-lg shadow-md'
          onClick={() => {
            setMascotas(perros);
          }}
        >
          <img
            className='w-[5rem] h-[4.5rem]'
            src='/images/dog_icon.svg'
            alt=''
          />
          Perros
        </button>
        <button
          className='border border-gray-100 py-5 px-10 rounded-lg shadow-md'
          onClick={() => {
            setMascotas(gatos);
          }}
        >
          <img
            className='w-[5rem] h-[4.5rem]'
            src='/images/cat_icon.svg'
            alt=''
          />
          Gatos
        </button>
      </div>
      <div className='w-3/4 grid grid-cols-4 gap-x-6 gap-y-9 mt-10'>
        {mascotas.map((animal) => (
          <Card
            key={animal._id}
            id={animal._id}
            Nombre={animal.name}
            Foto={animal.imgs[0]}
            raza={animal.breed}
            adopt={adopt}
            // description={animal.DescripcionGeneral}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
