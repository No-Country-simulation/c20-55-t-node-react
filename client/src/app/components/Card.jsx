"use client";

import React from "react";
import Link from "next/link";

function Card({
  id,
  Nombre,
  Foto,
  DescripcionGeneral,
  raza,
  status = "",
  adopt = 0,
  idAdopter
}) {
  const ruta = `/users/adopter/home/description?id=${id}&adopt=${adopt}`;
  const ruta2 = `/users/adopter/home/description?adopt=${1}`;

  return (
    <Link href={ruta}>
      <div className='relative'>
        {status && (
          <div className='absolute top-2.5 left-2.5 h-[29px] px-2.5 py-1 bg-[#c7c7c7] rounded-2xl justify-center items-center gap-2.5 inline-flex'>
            <div className='text-[#2e2e2e] text-sm font-medium'>{status}</div>
          </div>
        )}
        <img
          src={Foto}
          alt={Nombre}
          className='w-[15.5rem] h-[16rem] object-cover rounded-lg'
        />
        <div className='text-start'>
          <p className='text-lg font-semibold'>{Nombre}</p>
          <p className='text-gray-600'>{raza}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
