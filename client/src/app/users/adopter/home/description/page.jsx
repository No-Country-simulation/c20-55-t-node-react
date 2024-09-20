"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BASE_PATH_API } from "@/app/_config";

function ItemDescription() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const adopt = searchParams.get("adopt");

  const router = useRouter();

  const goToPage = () => {
    router.push(`/users/admin/home/mascotas/formulario/?id=${id}`);
  };

  const goToAdopt = () => {
    router.push(`/users/adopter/form?idPet=${id}`);
  };

  const [data, setData] = useState({});
  const [imgs, setImgs] = useState([]);

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`${BASE_PATH_API}/pet/${id}`);

      const data = await response.json();

      if (data.ok) {
        setData(data.pet);
        setImgs(data.pet.imgs);
        // console.log(data);
      }
    })();
  }, []);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100'>
      <div className='w-[1440px] h-[2155px] relative bg-white'>
        <div className='w-[663px] h-[82px] left-[125px] top-[873px] absolute bg-white rounded-[27px] border border-neutral-200' />
        <div className='w-[650px] h-64 left-[138px] top-[1085px] absolute'>
          <span className='text-[#2e2e2e] text-xl font-medium '>
            Personalidad:{" "}
          </span>
          <span className='text-[#2e2e2e] text-xl font-light '>
            <br />
          </span>
          <span className='text-[#2e2e2e] text-xl font-medium '>Peso:</span>
          <span className='text-[#2e2e2e] text-xl font-normal '>
            <br />
          </span>
          <span className='text-[#2e2e2e] text-xl font-medium '>Raza: </span>
          <span className='text-[#2e2e2e] text-xl font-light '>
            {data.breed}
            <br />
          </span>
          <span className='text-[#2e2e2e] text-xl font-medium '>Tamaño: </span>
          <span className='text-[#2e2e2e] text-xl font-light '>
            {data.size}
            <br />
          </span>
          <span className='text-[#2e2e2e] text-xl font-medium '>
            Estado de salud:{" "}
          </span>
          <span className='text-[#2e2e2e] text-xl font-light '>
             {data.healthStatus}
          </span>
        </div>
        <div className='w-[677px] left-[146px] top-[1393px] absolute text-[#2e2e2e] text-base font-normal '>
          La identificación con microchip es obligatoria en perros, gatos. La
          vacuna de la rabia es obligatoria en perros mayores de 3 meses.
        </div>
        <div className='left-[133px] top-[753px] absolute text-black text-[32px] font-medium '>
          {data.name}
        </div>
        <div className='left-[149px] top-[899px] absolute'>
          <span className='text-black text-xl font-medium '>Edad: </span>
          <span className='text-black text-xl font-normal '>{data.age}</span>
        </div>
        <div className='left-[364px] top-[899px] absolute'>
          <span className='text-black text-xl font-medium '>Sexo: </span>
          <span className='text-black text-xl font-normal '></span>
        </div>
        <div className='left-[577px] top-[899px] absolute'>
          <span className='text-black text-xl font-medium '>Tamaño: </span>
          <span className='text-black text-xl font-normal '>{data.size}</span>
        </div>
        <img
          className='w-[561px] h-[413px] left-[133px] top-[289px] absolute rounded-tl-[10px] rounded-bl-[10px]'
          src={imgs[0]}
        />
        <img
          className='w-[276px] h-[207px] left-[978px] top-[289px] absolute rounded-tr-[10px]'
          src={imgs[1]}
        />
        <img
          className='w-[268px] h-[207px] left-[702px] top-[289px] absolute'
          src={imgs[2]}
        />
        <img
          className='w-[268px] h-[198px] left-[702px] top-[504px] absolute'
          src={imgs[3]}
        />
        <img
          className='w-[276px] h-[198px] left-[978px] top-[504px] absolute rounded-br-[10px]'
          src={imgs[4]}
        />
        <div className='left-[133px] top-[801px] absolute text-black text-2xl font-normal '>
          Gato Europeo Común · Palermo
        </div>
        <div className='left-[146px] top-[1016px] absolute text-[#0b5a69] text-2xl font-medium '>
          Descripción
        </div>
        <div className='left-[146px] top-[1557px] absolute text-[#07323a] text-2xl font-medium '>
          Sigue explorando
        </div>
        <div className='h-[228px] px-[23px] pt-8 pb-[47px] left-[64.5rem] top-[788px] absolute bg-white rounded-[28px] shadow border border-[#b3b3b3] flex-col justify-center items-center gap-9 inline-flex'>
          {/* <div className='self-stretch text-center text-black text-[22px] font-medium '>
            ¿Quieres adoptar a Max?
          </div> */}
          <div className='self-stretch h-20 flex-col justify-start items-center gap-[23px] flex'>
            <button
              onClick={() => {
                if (adopt == 1) {
                  goToAdopt();
                } else {
                  goToPage();
                }
              }}
              className='p-6 bg-[#07323a] rounded-[20px] shadow justify-start items-center gap-6 flex'
            >
              <div className='text-center w-[8rem] text-white text-2xl font-medium '>
                {adopt == 1 ? "Adoptar" : "Editar"}
              </div>
            </button>
          </div>
        </div>
        <div className='h-[346px] left-[146px] top-[1665px] absolute flex-col justify-start items-start gap-[9px] inline-flex'>
          <img
            className='self-stretch h-[284px] rounded-[10px]'
            src='https://via.placeholder.com/298x284'
          />
          <div className='h-[53px] flex-col justify-start items-start flex'>
            <div className='self-stretch text-black text-xl font-medium '>
              Charlie
            </div>
            <div className='self-stretch text-[#2e2e2e] text-[15px] font-medium '>
              Gato doméstico
            </div>
          </div>
        </div>
        <div className='h-[346px] left-[484px] top-[1659px] absolute flex-col justify-start items-start gap-[9px] inline-flex'>
          <img
            className='self-stretch h-[284px] rounded-[10px]'
            src='https://via.placeholder.com/298x284'
          />
          <div className='h-[53px] flex-col justify-start items-start flex'>
            <div className='self-stretch text-black text-xl font-medium '>
              Candy
            </div>
            <div className='self-stretch text-[#2e2e2e] text-[15px] font-medium '>
              Tabby
            </div>
          </div>
        </div>
        <button
          onClick={handleBack}
          className='w-[34px] h-[34px] left-[138px] top-[168px] absolute justify-center items-center inline-flex'
        >
          <div className='w-[34px] h-[34px] text-[3rem] relative flex-col justify-start items-start flex'>
            {"<-"}
          </div>
        </button>
        <button
          onClick={handleBack}
          className='w-[34px] h-[34px] left-[76rem] top-[168px] absolute justify-center items-center inline-flex'
        >
          <div className='w-[34px] h-[34px] text-[3rem] relative flex-col justify-start items-start flex'>
            {"X"}
          </div>
        </button>
      </div>
      <Link href='/users/adopter/home'>Volver</Link>
    </div>
  );
}

export default ItemDescription;
