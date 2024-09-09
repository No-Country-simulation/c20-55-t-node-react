import jwt from "jsonwebtoken";
import { SECRET_JWT_KEY } from "../config/config.js";

export const tokenToSession = (req, res, next) => {
    const token = req.cookies.accessToken;

    req.session = { userData: null };

    try {
        const userData = jwt.verify(token, SECRET_JWT_KEY);
        req.session.userData = userData;
    } catch (error) {}
    next();
};
