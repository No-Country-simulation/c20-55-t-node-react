import AuthService from './auth.service.js';
import AuthRepository from './repository/auth.repository.js';

const authDao = new AuthService();

export const authService = new AuthRepository(authDao);
