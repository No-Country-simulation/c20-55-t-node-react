import AddPetButton from "@/app/components/AddPetButton";
import ItemListContainer from "@/app/components/ItemListContainer";

import React, { useState, useEffect } from "react";
import images from "next/image";
import Card from "@/app/components/Card";
import { BASE_PATH_API } from "@/app/_config";

const AvailablePets = () => {
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

  return (
    <div className='flex h-full justify-center'>
      {/* <AddPetButton/> */}
      <div className='flex flex-col items-center'>
        <div className='w-full text-start'>
          <p className='text-[3rem] mb-4'>Gestión de mascotas</p>
          <p>
            Añade, edita o elimina perfiles de mascotas disponibles para
            adopción.
          </p>
        </div>

        <div className='flex w-full justify-between mt-8'>
          <button className='main-container flex w-[309px]'>
            <div className='flex w-[309px] h-[80px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] gap-[24px] items-center shrink-0 flex-nowrap bg-[#f9f9f9] rounded-[20px] relative shadow-[0_4px_8px_0_rgba(216,216,216,0.8)]'>
              <div className='w-[32px] h-[32px] shrink-0 relative overflow-hidden z-[1]'>
                <div className='w-[29.944px] h-[29.944px] bg-[length:100%_100%] bg-no-repeat relative z-[2] mt-[2.056px] mr-0 mb-0 ml-[2.056px] text-[3rem]'>
                  +
                </div>
              </div>
              <span className='flex w-[205px] h-[36px] justify-center items-start shrink-0 basis-auto text-[24px] font-medium leading-[36px] text-[#07323a] relative text-center whitespace-nowrap z-[3]'>
                Añadir Mascotas
              </span>
            </div>
          </button>
          <button className='main-container'>
            <div className='flex w-[202px] h-[80px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] gap-[24px] items-center shrink-0 flex-nowrap bg-[#07323a] rounded-[20px] relative shadow-[0_4px_8px_0_rgba(216,216,216,0.8)]'>
              <div className='w-[32px] h-[32px] shrink-0 relative overflow-hidden z-[1]'>
                <div className='w-[27px] h-[24.333px] bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTBaqDPcFlqaRG_f7I-gBrTDS_PaaJb1kRw&s)] bg-[length:100%_100%] bg-no-repeat relative z-[2] mt-[3.833px] mr-0 mb-0 ml-[2.5px]' />
              </div>
              <span className="flex w-[98px] h-[36px] justify-center items-start shrink-0 basis-auto font-['Poppins'] text-[24px] font-medium leading-[36px] text-[#fff] relative text-center whitespace-nowrap z-[3]">
                Eliminar
              </span>
            </div>
          </button>
        </div>

        <div className='w-4/4 grid grid-cols-4 gap-x-6 gap-y-9 mt-10'>
          {mascotas.map((animal) => (
            <Card
              key={animal._id}
              id={animal._id}
              Nombre={animal.name}
              Foto={animal.imgs[0]}
              raza={animal.breed}
              // description={animal.DescripcionGeneral}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailablePets;
