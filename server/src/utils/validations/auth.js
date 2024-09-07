import { body } from 'express-validator';

export const authValidations = [
  body('email')
    .isEmail()
    .withMessage('Dirección de correo electrónico inválida')
    .notEmpty()
    .withMessage('El correo electrónico es requerido'),

  body('password')
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/[a-z]/)
    .withMessage('La contraseña debe contener al menos una letra minúscula')
    .matches(/[A-Z]/)
    .withMessage('La contraseña debe contener al menos una letra mayúscula')
    .matches(/\d/)
    .withMessage('La contraseña debe contener al menos un número')
    .matches(/[@$!%*?&]/)
    .withMessage(
      'La contraseña debe contener al menos un carácter especial (@, $, !, %, *, ?, &)'
    )
    .notEmpty()
    .withMessage('La contraseña es requerida')
];
