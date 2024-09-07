import { Router } from "express";
import {
    adminRegisterController,
    adopterRegisterController,
    loginController,
    logoutController
} from "../controllers/auth.controller.js";
import { authValidations } from "../utils/validations/auth.js";
import { validateRequest } from "../middlewares/validateRequest.js";

const authRouter = Router();

authRouter.post(
    "/adopter-register",
    authValidations,
    validateRequest,
    adopterRegisterController
);
authRouter.post(
    "/admin-register",
    authValidations,
    validateRequest,
    adminRegisterController
);
authRouter.post("/login", authValidations, validateRequest, loginController);
authRouter.post("/logout", logoutController);

export default authRouter;
