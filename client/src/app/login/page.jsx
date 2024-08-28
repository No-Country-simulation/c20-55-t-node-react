import React from "react";
import "./login.css";

function login() {
	return (
		<div className="login">
			<div>
				<legend>Usuario</legend>
				<input type="text" placeholder="usuario" />
			</div>
			<div>
				<div>
					<legend>Constraseña</legend>
					<input type="password" placeholder="password" />
				</div>
				<div>
					<a href="#">olvide mi contraseña</a>
					<a href="#">crear cuenta</a>
				</div>
			</div>
			<div>
				<button type="submit">Loguearse</button>
			</div>
		</div>
	);
}

export default login;
