"use client";

import React from "react";
import Link from "next/link";

function Card({ Nombre, Foto, DescripcionGeneral, raza }) {
  const ruta = `/users/adopter/home/description?descripcion=${DescripcionGeneral}`;

  return (
    <Link href={ruta}>
      <div className='bg-white rounded-lg overflow-hidden'>
        <img src={Foto} alt={Nombre} className='w-[15.5rem] h-[16rem] object-cover rounded-lg' />
        <div className='text-start'>
          <p className='text-lg font-semibold'>{Nombre}</p>
          <p className='text-gray-600'>{raza}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
