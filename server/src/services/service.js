import AuthService from "./auth.service.js";
import PetService from "./pet.service.js";
import AuthRepository from "./repository/auth.repository.js";
import PetRepository from "./repository/pet.repository.js";

const authDao = new AuthService();
const petDao = new PetService();

export const authService = new AuthRepository(authDao);
export const petService = new PetRepository(petDao);
