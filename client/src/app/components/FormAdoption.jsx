import { useState } from 'react';

const FormularioAdopcion = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombreMascota: '',
    tipoMascota: '',
    raza: '',
    edad: '',
    nombreAdoptante: '',
    emailAdoptante: '',
    razon: ''
  });

  const manejarCambio = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    console.log('Datos del formulario enviados:', datosFormulario);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label htmlFor="nombreMascota">Nombre de la Mascota:</label>
        <input
          type="text"
          id="nombreMascota"
          name="nombreMascota"
          value={datosFormulario.nombreMascota}
          onChange={manejarCambio}
          required
        />
      </div>
      <div>
        <label htmlFor="tipoMascota">Tipo de Mascota:</label>
        <select
          id="tipoMascota"
          name="tipoMascota"
          value={datosFormulario.tipoMascota}
          onChange={manejarCambio}
          required
        >
          <option value="">Seleccionar tipo</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label htmlFor="raza">Raza:</label>
        <input
          type="text"
          id="raza"
          name="raza"
          value={datosFormulario.raza}
          onChange={manejarCambio}
        />
      </div>
      <div>
        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          id="edad"
          name="edad"
          value={datosFormulario.edad}
          onChange={manejarCambio}
          required
        />
      </div>
      <div>
        <label htmlFor="nombreAdoptante">Tu Nombre:</label>
        <input
          type="text"
          id="nombreAdoptante"
          name="nombreAdoptante"
          value={datosFormulario.nombreAdoptante}
          onChange={manejarCambio}
          required
        />
      </div>
      <div>
        <label htmlFor="emailAdoptante">Tu Correo Electrónico:</label>
        <input
          type="email"
          id="emailAdoptante"
          name="emailAdoptante"
          value={datosFormulario.emailAdoptante}
          onChange={manejarCambio}
          required
        />
      </div>
      <div>
        <label htmlFor="razon">¿Por qué quieres adoptar esta mascota?</label>
        <textarea
          id="razon"
          name="razon"
          value={datosFormulario.razon}
          onChange={manejarCambio}
          required
        />
      </div>
      <button type="submit">Enviar Solicitud de Adopción</button>
    </form>
  );
};

export default FormularioAdopcion;
