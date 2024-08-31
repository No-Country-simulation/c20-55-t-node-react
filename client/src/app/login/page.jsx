'use client'
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
    // if (!formValues.usuario || !formValues.password) {
    //   setErrors({ form: 'Usuario y contraseña son requeridos' });
    // } else {
    //   setErrors({});
    //   router.push('/home');
    // }
	router.push('/users/admin/home');

  };

  return (
    <div className="login">
        <InputForm
          type="text"
          name="Email"
          value={formValues.usuario}
          onChange={handleInputChange}
          placeholder="Email"
          error={errors.usuario}
        />
        <InputForm
          type="password"
          name="Contraseña"
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
