import React from "react";

function login() {
	const ValidarContraseña = () => {};
	const ValidarUsuario = () => {};
	return (
		<>
			<div className="login">
				<legend>Usuario</legend>
				<input type="text" />
				<legend>Constraseña</legend>
				<input type="password" />
				<a href="#">olvide mi contraseña</a>
				<a href="#">crear cuenta</a>
				<button onClick={ValidarUsuario} type="submit">
					Loguearse
				</button>
			</div>
		</>
	);
}

export default login;
