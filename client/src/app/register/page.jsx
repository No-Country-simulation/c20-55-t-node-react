'use client'
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import InputForm from "../components/InputForm"; 
import { useRouter } from "next/navigation";

function RegistroAspirante() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formValues.nombre) newErrors.nombre = 'Nombre es requerido';
    if (!formValues.apellido) newErrors.apellido = 'Apellido es requerido';
    if (!formValues.email) newErrors.email = 'Email es requerido';
    if (!formValues.telefono) newErrors.telefono = 'Teléfono es requerido';
    if (!formValues.direccion) newErrors.direccion = 'Dirección es requerida';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      router.push('/gracias');
    }
  };

  return (
    <div className="registroAspirante gap-5">
      <h2 className="text-2xl font-bold text-center mb-6">Registro para Adopción</h2>
      <div>
        <InputForm
          type="text"
          name="nombre"
          value={formValues.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
          error={errors.nombre}
        />
      </div>
      <div>
        <InputForm
          type="text"
          name="apellido"
          value={formValues.apellido}
          onChange={handleInputChange}
          placeholder="Apellido"
          error={errors.apellido}
        />
      </div>
      <div>
        <InputForm
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          placeholder="Email"
          error={errors.email}
        />
      </div>
      <div>
        <InputForm
          type="text"
          name="telefono"
          value={formValues.telefono}
          onChange={handleInputChange}
          placeholder="Teléfono"
          error={errors.telefono}
        />
      </div>
      <div>
        <InputForm
          type="text"
          name="direccion"
          value={formValues.direccion}
          onChange={handleInputChange}
          placeholder="Dirección"
          error={errors.direccion}
        />
      </div>
      <div className="flex flex-col text-center gap-4 sm:gap-6 lg:m-auto pt-4 sm:px-[14%] md:px-[30%]">
        <PrimaryButton text="Registrarse" onClick={handleSubmit} />
        {errors.form && <p className="text-red-500 text-xs font-semibold">{errors.form}</p>}
      </div>
    </div>
  );
}

export default RegistroAspirante;
