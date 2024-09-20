"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, Cat, Dog } from "lucide-react";
import PrimaryButton from "@/app/components/PrimaryButton";
import { BASE_PATH_API } from "@/app/_config";
import { useRouter, useSearchParams } from "next/navigation";

const initialFormData = {
  name: "",
  breed: "",
  sex: "",
  age: "",
  size: "",
  type: "",
  description: "",
  notes: "",
  file: null
};

const AddPetForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [hasPet, setHasPet] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const id = searchParams.get("id");

  const backPage = () => {
    router.back();
  };

  if (id) {
    useEffect(() => {
      setHasPet(true);
      (async () => {
        const response = await fetch(`${BASE_PATH_API}/pet/${id}`);

        const data = await response.json();

        if (data.ok) {
          const finalData = {
            ...data.pet,
            specie: formData.type,
            continueCreate: true,
            post: true,
            category: formData.type + "s"
          };
          setFormData(finalData);
        }
      })();
    }, []);
  }

  const handleFileChange = (e) => {
    const file = e.target.files;
    // if (file && file.size <= 1000000) {
    if (file) {
      // 1MB limit
      setFormData((prevState) => ({
        ...prevState,
        files: file
      }));
      setImgFiles(file);
    } else {
      alert("El archivo debe ser menor a 1MB");
    }
  };

  const handleTypeSelect = (type) => {
    setFormData((prevState) => ({
      ...prevState,
      type: type
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      specie: formData.type,
      continueCreate: true,
      post: true,
      category: formData.type + "s"
    };

    const response = await fetch(`${BASE_PATH_API}/pet/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(finalData)
    });

    const result = await response.json();

    if (response.ok) {
      console.log(result);

      backPage();
    } else {
      console.log("Error al actualizar el formulario: " + result);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      specie: formData.type,
      continueCreate: true,
      post: true,
      category: formData.type + "s"
    };

    const response = await fetch(`${BASE_PATH_API}/pet/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(finalData)
    });

    const result = await response.json();

    if (response.ok) {
      console.log(result);

      backPage();
    } else {
      console.log("Error al enviar el formulario: " + result);
    }
  };

  return (
    <div className='max-w-2xl mx-auto p-4'>
      <div className='flex items-center mb-6'>
        <ArrowLeft className='w-6 h-6 mr-2' />
        <h1 className='text-xl font-semibold'>Añadir Mascota</h1>
      </div>

      <form onSubmit={(e) => (hasPet ? handleUpdate(e) : handleSubmit(e))}>
        <div className='bg-white rounded-lg shadow-sm p-6 mb-4'>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Nombre
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Ingresar el nombre de la mascota'
              className='w-full p-2 border rounded-md'
              required
            />
          </div>

          <div className='mb-4'>
            <h2 className='text-sm font-medium text-gray-700 mb-2'>
              Especificaciones
            </h2>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='breed'
                  className='block text-xs text-gray-500 mb-1'
                >
                  Raza
                </label>
                <input
                  type='text'
                  id='breed'
                  name='breed'
                  value={formData.breed}
                  onChange={handleInputChange}
                  placeholder='Ingresar raza de la mascota'
                  className='w-full p-2 border rounded-md'
                />
              </div>
              <div>
                <label
                  htmlFor='sex'
                  className='block text-xs text-gray-500 mb-1'
                >
                  Sexo
                </label>
                <input
                  type='text'
                  id='sex'
                  name='sex'
                  value={formData.sex}
                  onChange={handleInputChange}
                  placeholder='Ingresar sexo'
                  className='w-full p-2 border rounded-md'
                />
              </div>
              <div>
                <label
                  htmlFor='age'
                  className='block text-xs text-gray-500 mb-1'
                >
                  Edad
                </label>
                <input
                  type='number'
                  id='age'
                  name='age'
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder='Ingresar edad de la mascota'
                  className='w-full p-2 border rounded-md'
                />
              </div>
              <div>
                <label
                  htmlFor='size'
                  className='block text-xs text-gray-500 mb-1'
                >
                  Tamaño
                </label>
                <input
                  type='text'
                  id='size'
                  name='size'
                  value={formData.size}
                  onChange={handleInputChange}
                  placeholder='Ingresar tamaño'
                  className='w-full p-2 border rounded-md'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-sm p-6 mb-4'>
          <h2 className='text-sm font-medium text-gray-700 mb-2'>
            Tipo de Mascota
          </h2>
          <p className='text-xs text-gray-500 mb-4'>
            Selecciona el tipo de mascota que quieres añadir
          </p>
          <div className='flex space-x-4'>
            <button
              type='button'
              onClick={() => handleTypeSelect("gato")}
              className={`flex items-center px-4 py-2 border rounded-md ${
                formData.type === "gato" ? "bg-blue-100 border-blue-500" : ""
              }`}
            >
              <Cat className='w-5 h-5 mr-2' />
              Gatos
            </button>
            <button
              type='button'
              onClick={() => handleTypeSelect("perro")}
              className={`flex items-center px-4 py-2 border rounded-md ${
                formData.type === "perro" ? "bg-blue-100 border-blue-500" : ""
              }`}
            >
              <Dog className='w-5 h-5 mr-2' />
              Perros
            </button>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-sm p-6 mb-4'>
          <h2 className='text-sm font-medium text-gray-700 mb-2'>
            Elementos multimedia
          </h2>
          <div className='border-2 border-dashed rounded-md p-4 text-center'>
            <input
              type='file'
              id='file'
              onChange={handleFileChange}
              name='files'
              className='hidden'
              // accept='image/*'
              multiple
            />
            <label
              htmlFor='file'
              className='cursor-pointer px-4 py-2 bg-blue-100 text-blue-600 rounded-md inline-block'
            >
              Agregar archivos
            </label>
            <p className='text-xs text-gray-400 mt-2'>
              Acepta imágenes menores 1MB
            </p>
            {formData.file && (
              <p className='text-sm text-green-600 mt-2'>
                Archivo seleccionado: {formData.file.name}
              </p>
            )}
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-sm p-6 mb-4'>
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Descripción
          </label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            rows='3'
            placeholder='Ingresar descripción de la mascota'
            className='w-full p-2 border rounded-md'
          ></textarea>
        </div>

        <div className='bg-white rounded-lg shadow-sm p-6 mb-4'>
          <label
            htmlFor='notes'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Notas Adicionales
          </label>
          <textarea
            id='notes'
            name='notes'
            value={formData.notes}
            onChange={handleInputChange}
            rows='3'
            placeholder='Ingresar notas adicionales'
            className='w-full p-2 border rounded-md'
          ></textarea>
        </div>

        <PrimaryButton
          text={hasPet ? "Actualizar" : "Publicar"}
          type='submit'
          styles={"w-[10rem] mt-4 "}
        />
      </form>
    </div>
  );
};

export default AddPetForm;
