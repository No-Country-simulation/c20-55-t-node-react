"use client";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import InputForm from "../components/InputForm";
import { useRouter } from "next/navigation";
import images from "next/image";
import { BASE_PATH_API } from "../_config";

const initialValues = {
  name: "",
  surname: "",
  email: "",
  password: ""
};

function RegistroAspirante() {
  const router = useRouter();
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formValues.name) newErrors.name = "Nombre es requerido";
    if (!formValues.surname) newErrors.surname = "Apellido es requerido";
    if (!formValues.email) newErrors.email = "Email es requerido";
    if (!formValues.password) newErrors.password = "Contraseña es requerido";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const response = await fetch(`${BASE_PATH_API}/auth/adopter-register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValues)
    });

    const result = await response.json();

    if (response.ok) {
      setFormValues(initialValues);
      router.push("/users/adopter/home");
    } else {
      if (result.errors) {
        const errors = result.errors[0];
        newErrors[errors.path] = errors.msg;
        setErrors(newErrors);
      }
      console.error("Error in Register:", result.message);
    }
  };

  return (
    <div className='flex'>
      <div className='h-screen w-1/2'>
        <img
          className='h-full w-full object-cover'
          src='/images/image_auth.png'
          alt='Fondo de Perritos'
        />
      </div>
      <form
        className='registroAspirante w-1/2 h-screen flex flex-col gap-4 items-center justify-center'
        onSubmit={handleSubmit}
      >
        <h2 className='text-5xl text-center mb-6'>Crea tu perfil</h2>

        <InputForm
          type='text'
          name='name'
          value={formValues.name}
          onChange={handleInputChange}
          placeholder='Nombre'
          error={errors.name}
        />
        <InputForm
          type='text'
          name='surname'
          value={formValues.surname}
          onChange={handleInputChange}
          placeholder='Apellido'
          error={errors.surname}
        />
        <InputForm
          type='email'
          name='email'
          value={formValues.email}
          onChange={handleInputChange}
          placeholder='Email'
          error={errors.email}
        />
        <InputForm
          type='password'
          name='password'
          value={formValues.password}
          onChange={handleInputChange}
          placeholder='Password'
          error={errors.password}
        />

        <PrimaryButton text='Registrarse' styles='mt-6' type='submit' />

        <p className='pb-4'>
          ¿Tienes cuenta?{" "}
          <a href='/login' className='text-[#07323A] font-bold'>
            Iniciar sessión aqui
          </a>{" "}
        </p>

        <p className='text-[#8E8E8E] w-1/2 text-center pt-5'>
          Al registrarte en (Nombre de la app) aceptas nuestros{" "}
          <span className='text-[#1d1c1c]'>
            Términos y Políticas de privacidad
          </span>
        </p>
      </form>
    </div>
  );
}

export default RegistroAspirante;
