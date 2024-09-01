import { Router } from 'express';
import { loginController } from '../controllers/auth.controller.js';
import { loginValidations } from '../utils/validations/auth.js';
import { validateRequest } from '../middlewares/validateRequest.js';

const authRouter = Router();

authRouter.post('/login', loginValidations, validateRequest, loginController);

export default authRouter;
