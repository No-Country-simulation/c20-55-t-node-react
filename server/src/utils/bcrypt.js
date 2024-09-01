import bcrypt from 'bcryptjs';

export const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (password, passwordHashed) => {
  return bcrypt.compareSync(password, passwordHashed);
};
