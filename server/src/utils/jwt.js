import jwt from 'jsonwebtoken';
import { SECRET_JWT_KEY } from '../config/config.js';

export const decodeVerifyJWT = (token) => {
  const payload = jwt.verify(token, SECRET_JWT_KEY);
  return payload;
}

export const generateJWT = (userData) => {
  const options = {
    expiresIn: '1h'
  };

  return jwt.sign(userData, SECRET_JWT_KEY, options);
};
