'use client';
import React, { useState } from "react";
import "./login.css";
import PrimaryButton from "../components/PrimaryButton";
import InputForm from "../components/InputForm"; 
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({ usuario: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { usuario, password } = formValues;

    if (!usuario || !password) {
      setErrors({ form: 'Usuario y contraseña son requeridos' });
    } else {
      setErrors({});
      if (usuario === 'admin@mail.com') {
        router.push('/users/admin/home');
      } else if (usuario === 'user@mail.com') {
        router.push('/users/adopter/home');
      } else {
        setErrors({ form: 'Credenciales incorrectas' });
      }
    }
  };

  return (
    <div className="login">
      <InputForm
        type="text"
        name="usuario"  
        value={formValues.usuario}
        onChange={handleInputChange}
        placeholder="Email"
        error={errors.usuario}
      />
      <InputForm
        type="password"
        name="password"  
        value={formValues.password}
        onChange={handleInputChange}
        placeholder="Contraseña"
        error={errors.password}
      />
      <div>
        <a href="#">Olvidé mi contraseña</a>
      </div>
      <div className="flex flex-col text-center gap-4 sm:gap-6 lg:m-auto pt-4 sm:px-[14%] md:px-[30%]">
        <PrimaryButton text="Iniciar Sesión" onClick={handleLogin} />
        {errors.form && <p className="text-red-500 text-xs font-semibold">{errors.form}</p>}
      </div>
    </div>
  );
}

export default Login;
