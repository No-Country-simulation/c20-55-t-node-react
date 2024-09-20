"use client";

import React, { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import { BASE_PATH_API } from "@/app/_config";
import { useRouter, useSearchParams } from "next/navigation";

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    nationalID: "",
    housingType: "",
    housingOwnership: "",
    outdoorSpace: false,
    totalFamily: "",
    hasChildren: false,
    otherPets: false,
    typePets: "",
    hadPets: false,
    sizeHasPets: "",
    surrenderPet: false,
    reasonSurrender: "",
    commitments: {
      coverCosts: false,
      returnPet: false
    },
    contract: null
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  const idPet = searchParams.get("idPet");

  const backPage = () => {
    router.back();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleCommitmentChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      commitments: {
        ...prevState.commitments,
        [name]: checked
      }
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      contract: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    const finalData = {
      adopterId: "66eccdfc867b37e8b1e714ed",
      petId: idPet,
      status: "Pendiente",
      adopterInfo: {
        ...formData
      }
    };

    const res = await fetch(`${BASE_PATH_API}/application`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(finalData)
    });

    if (res.ok) {
      console.log(res);
      router.back();
    } else {
      console.log(res);
    }
  };

  return (
    <div className='max-w-2xl mx-auto p-4'>
      <header className='flex items-center justify-between mb-6'>
        <button className='flex items-center' onClick={backPage}>
          <ArrowLeft className='w-6 h-6 mr-2' />
          <h1 className='text-2xl font-bold'>Adopta Me</h1>
        </button>
      </header>

      <form onSubmit={handleSubmit}>
        {/* Secciones anteriores del formulario */}
        <div className='max-w-2xl mx-auto p-4'>
          <h1 className='text-2xl font-bold mb-4'>Formulario de Adopción</h1>

          {/* Información personal */}
          <section className='mb-8'>
            <h2 className='text-xl font-semibold mb-4'>Información personal</h2>
            <p className='mb-4'>
              Por favor, proporciona tus datos personales para que podamos
              conocerte mejor y contactarte durante el proceso de adopción. Esta
              información es confidencial y solo se utilizará para facilitar la
              adopción.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Nombre completo'
                className='w-full p-2 border rounded'
              />
              <input
                type='number'
                name='age'
                value={formData.age}
                onChange={handleInputChange}
                placeholder='Edad'
                className='w-full p-2 border rounded'
              />
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                placeholder='Teléfono de contacto'
                className='w-full p-2 border rounded'
              />
              <input
                type='text'
                name='nationalID'
                value={formData.nationalID}
                onChange={handleInputChange}
                placeholder='Ingrese número de documento'
                className='w-full p-2 border rounded'
              />
            </div>
          </section>

          {/* Información sobre la vivienda */}
          <section className='mb-8'>
            <h2 className='text-xl font-semibold mb-4'>
              Información sobre la vivienda
            </h2>
            <p className='mb-4'>
              Ayúdanos a conocer mejor el espacio donde vivirá la mascota. Esto
              nos permite asegurarnos de que el entorno sea adecuado y seguro
              para su bienestar.
            </p>
            <div className='mb-4'>
              <p className='mb-2'>Tipo de vivienda:</p>
              <div className='flex flex-col space-y-2'>
                {["Casa", "Departamento", "Monoambiente"].map((type) => (
                  <label key={type} className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='housingType'
                      value={type}
                      checked={formData.housingType === type}
                      onChange={handleInputChange}
                      className='form-radio'
                    />
                    <span className='ml-2'>{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className='mb-4'>
              <p className='mb-2'>¿Es de su propiedad o alquilada?</p>
              <div className='flex flex-col space-y-2'>
                {["Propia", "Alquilada"].map((type) => (
                  <label key={type} className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='housingOwnership'
                      value={type}
                      checked={formData.housingOwnership === type}
                      onChange={handleInputChange}
                      className='form-radio'
                    />
                    <span className='ml-2'>{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className='mb-4'>
              <p className='mb-2'>¿Tiene espacio exterior?</p>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='outdoorSpace'
                  checked={formData.outdoorSpace}
                  onChange={handleInputChange}
                  className='form-checkbox'
                />
                <span className='ml-2'>Sí</span>
              </label>
            </div>
          </section>

          {/* Información Familiar */}
          <section className='mb-8'>
            <h2 className='text-xl font-semibold mb-4'>Información Familiar</h2>
            <p className='mb-4'>
              Queremos conocer un poco más sobre las personas con las que
              convivirá la mascota. Esta información nos ayuda a asegurarnos de
              que la adopción sea una buena experiencia tanto para ti como para
              tu familia.
            </p>
            <div className='mb-4'>
              <input
                type='number'
                name='totalFamily'
                value={formData.totalFamily}
                onChange={handleInputChange}
                placeholder='Ingresar número de personas'
                className='w-full p-2 border rounded'
              />
            </div>
            <div className='mb-4'>
              <p className='mb-2'>¿Hay niños en el hogar?</p>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='hasChildren'
                  checked={formData.hasChildren}
                  onChange={handleInputChange}
                  className='form-checkbox'
                />
                <span className='ml-2'>Sí</span>
              </label>
            </div>
            <div className='mb-4'>
              <p className='mb-2'>¿Tiene otras mascotas?</p>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='otherPets'
                  checked={formData.otherPets}
                  onChange={handleInputChange}
                  className='form-checkbox'
                />
                <span className='ml-2'>Sí</span>
              </label>
            </div>
            {formData.otherPets && (
              <div className='mb-4'>
                <input
                  type='text'
                  name='typePets'
                  value={formData.typePets}
                  onChange={handleInputChange}
                  placeholder='Ingresar el tipo de mascota'
                  className='w-full p-2 border rounded'
                />
              </div>
            )}
          </section>
        </div>

        {/* Experiencia con Mascotas */}
        <section className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>
            Experiencia con Mascotas
          </h2>
          <p className='mb-4'>
            Comparte tu experiencia previa con mascotas y el nivel de compromiso
            que puedes ofrecer. Esto nos ayudará a encontrar la mejor mascota
            para ti.
          </p>

          <div className='mb-4'>
            <p className='mb-2'>¿Ha tenido mascotas anteriormente?</p>
            <div className='flex space-x-4'>
              {["Si", "No"].map((option) => (
                <label key={option} className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='hadPets'
                    value={option === "Si"}
                    checked={formData.hadPets === (option === "Si")}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hadPets: e.target.value === "true"
                      })
                    }
                    className='form-radio'
                  />
                  <span className='ml-2'>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className='mb-4'>
            <p className='mb-2'>Tamaño de la mascota:</p>
            <div className='flex flex-col space-y-2'>
              {["Pequeño", "Mediano", "Grande"].map((size) => (
                <label key={size} className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='sizeHasPets'
                    value={size}
                    checked={formData.sizeHasPets === size}
                    onChange={handleInputChange}
                    className='form-radio'
                  />
                  <span className='ml-2'>{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div className='mb-4'>
            <p className='mb-2'>
              ¿Ha tenido que renunciar a una mascota antes?
            </p>
            <div className='flex space-x-4'>
              {["Si", "No"].map((option) => (
                <label key={option} className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='surrenderPet'
                    value={option === "Si"}
                    checked={formData.surrenderPet === (option === "Si")}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        surrenderPet: e.target.value === "true"
                      })
                    }
                    className='form-radio'
                  />
                  <span className='ml-2'>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {formData.surrenderPet && (
            <div className='mb-4'>
              <label htmlFor='reasonSurrender' className='block mb-2'>
                Si la respuesta fue sí, explique brevemente el motivo:
              </label>
              <textarea
                id='reasonSurrender'
                name='reasonSurrender'
                value={formData.reasonSurrender}
                onChange={handleInputChange}
                className='w-full p-2 border rounded'
                rows='3'
                placeholder='Ingresar texto aquí'
              ></textarea>
            </div>
          )}
        </section>

        {/* Compromisos */}
        <section className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Compromisos</h2>

          <div className='mb-4'>
            <p className='mb-2'>
              ¿Se compromete a cubrir los costos y cuidados necesarios?
            </p>
            <div className='flex space-x-4'>
              {["Si", "No"].map((option) => (
                <label key={option} className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    name='coverCosts'
                    checked={
                      formData.commitments.coverCosts === (option === "Si")
                    }
                    onChange={handleCommitmentChange}
                    className='form-checkbox'
                  />
                  <span className='ml-2'>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className='mb-4'>
            <p className='mb-2'>
              ¿Acepta devolver la mascota a la organización si ya no puede
              cuidarla?
            </p>
            <div className='flex space-x-4'>
              {["Si", "No"].map((option) => (
                <label key={option} className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    name='returnPet'
                    checked={
                      formData.commitments.returnPet === (option === "Si")
                    }
                    onChange={handleCommitmentChange}
                    className='form-checkbox'
                  />
                  <span className='ml-2'>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Descargar Contrato de Adopción */}
        <section className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>
            Descargar Contrato de Adopción
          </h2>
          <p className='mb-4'>
            Descarga y revisa el contrato de adopción. Este documento detalla
            los términos y compromisos de la adopción. Es obligatorio firmarlo
            para completar el proceso. Luego, súbelo en el formulario y envía tu
            aplicación.
          </p>
          <button className='flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4'>
            <Upload className='w-5 h-5 mr-2' />
            Descargar contrato
          </button>
          <p className='mb-4'>
            Una vez firmado el contrato súbelo envía tu aplicación.
          </p>
          <div className='mb-4'>
            <label
              htmlFor='contract'
              className='flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded cursor-pointer hover:bg-gray-300'
            >
              <Upload className='w-5 h-5 mr-2' />
              Subir archivo
              <input
                type='file'
                id='contract'
                name='contract'
                onChange={handleFileUpload}
                className='hidden'
              />
            </label>
          </div>
        </section>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AdoptionForm;
