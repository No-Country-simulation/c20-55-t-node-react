import Link from "next/link";
import React, { useEffect, useState } from "react";

function FormRegistro() {
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [phone, setPhone] = useState("");
	const [mail, setMail] = useState("");
	const [datosDeUsuario, setDatosDeUsuario] = useState({});
	const [habilitarBoton, setHabilitarBoton] = useState(true);

	useEffect(() => {
		const emailRegex = /\S+@\S+\.\S+/;
		const phoneValid = phone.trim().length > 0 && !isNaN(phone);
		const camposLlenos =
			name.trim() !== "" &&
			lastname.trim() !== "" &&
			emailRegex.test(mail) &&
			phoneValid;
		setHabilitarBoton(!camposLlenos);
	}, [name, lastname, mail, phone]);

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleLastName = (e) => {
		setLastname(e.target.value);
	};
	const handleMail = (e) => {
		setMail(e.target.value);
	};
	const handleTelefono = (e) => {
		setPhone(e.target.value);
	};

	const cargarUsuario = () => {
		const datosDeUsuarioACargar = {
			nombre: name,
			apellido: lastname,
			telefono: phone,
			mail: mail,
		};
		setDatosDeUsuario(datosDeUsuarioACargar);
	};

	return (
		<>
			<div className="flex">
				<legend>Nombre</legend>
				<input
					type="text"
					name="name"
					placeholder="Nombre"
					onChange={handleName}
					required
				/>
			</div>
			<div className="flex">
				<legend>Apellido</legend>
				<input
					name="last_name"
					type="text"
					placeholder="Apellido"
					onChange={handleLastName}
					required
				/>
			</div>
			<div className="flex">
				<legend>Fecha de nacimiento</legend>
				<input type="date" />
			</div>
			<div className="flex">
				<legend>E-Mail</legend>
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={handleMail}
					required
				/>
			</div>
			<div className="flex">
				<legend>Contraseña</legend>
				<input type="password" name="password" />
			</div>
			<div className="flex">
				<legend>Telefono</legend>
				<input
					name="phone"
					type="text"
					placeholder="Telefono"
					onChange={handleTelefono}
					required
				/>
			</div>
			<div className="flex">
				<legend>Foto (opcional)</legend>
				<input type="file" id="imageFile" accept="image/*" multiple />
			</div>

			<div className="flex">
				<Link>Volver</Link>
				{habilitarBoton == false ? (
					<Link type="submit" onClick={cargarUsuario}>
						Siguiente
					</Link>
				) : (
					<button>Siguiente</button>
				)}
			</div>
		</>
	);
}

export default FormRegistro;
