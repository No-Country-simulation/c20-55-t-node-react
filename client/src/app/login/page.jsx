"use client";
import React, { useState } from "react";
import "./login.css";
import PrimaryButton from "../components/PrimaryButton";
import InputForm from "../components/InputForm";
import { useRouter } from "next/navigation";
import { BASE_PATH_API } from "../_config";

const initialValues = { email: "", password: "" };

function Login() {
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
    if (!formValues.email) newErrors.email = "Email es requerido";
    if (!formValues.password) newErrors.password = "Contraseña es requerido";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const response = await fetch(`${BASE_PATH_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValues)
    });

    const result = await response.json();

    if (response.ok) {
      if (result.user.role === "admin") {
        router.push("/users/admin/home");
      } else if (result.user.role === "adopter") {
        router.push("/users/adopter/home");
      }
      setFormValues(initialValues);
    } else {
      if (result.errors) {
        const errors = result.errors[0];
        newErrors[errors.path] = errors.msg;
        setErrors(newErrors);
      }
      
      newErrors["globalError"] = result.message;
      setErrors(newErrors);
      console.log(errors);
      console.error("Error in Login:", result.message);
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
        className='registroAspirante w-1/2 h-screen flex flex-col gap-6 items-center justify-center'
        onSubmit={handleSubmit}
      >
        <h2 className='text-5xl text-center mb-6'>Ingresar</h2>

        {errors.globalError && <div className="text-red-600 rounded-lg bg-red-100 px-4 py-6">{errors.globalError}</div>}

        <InputForm
          label='Correo electrónico'
          type='email'
          name='email'
          value={formValues.email}
          onChange={handleInputChange}
          placeholder='Email'
          error={errors.email}
        />
        <InputForm
          label='Contraseña'
          type='password'
          name='password'
          value={formValues.password}
          onChange={handleInputChange}
          placeholder='Password'
          error={errors.password}
        />

        <a
          href='#'
          className='w-[26.9375rem] text-start underline text-[#0B5A69] font-semibold'
        >
          ¿Se te olvidó la contraseña?
        </a>

        <PrimaryButton text='Iniciar sessión' styles='mt-6' type='submit' />

        <p className='mb-5'>
          ¿No tienes cuenta?{" "}
          <a href='/register' className='text-[#07323A] font-bold'>
            Regístrate
          </a>{" "}
        </p>
      </form>
    </div>
  );
}

export default Login;
