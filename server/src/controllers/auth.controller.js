import { authService } from "../services/service.js";
import { createHash, isValidPassword } from "../utils/bcrypt.js";
import { generateJWT } from "../utils/jwt.js";

const registerUserController = async (req, res, role) => {
    try {
        const { name, surname, email, password } = req.body;
        const passwordHashed = createHash(password);
        const newUser = await authService.createUser({
            name,
            surname,
            email,
            password: passwordHashed,
            role
        });

        res.status(200).json({
            ok: true,
            message: `Successful user ${role} register`,
            user: {
                id: newUser._id,
                email,
                role: newUser.role
            }
        });
    } catch (error) {
        console.log(`Error in auth controller, ${role}Register: `, error);
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

export const adopterRegisterController = async (req, res) => {
    await registerUserController(req, res, "adopter");
};

export const adminRegisterController = async (req, res) => {
    await registerUserController(req, res, "admin");
};

export const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authService.getUserByEmail(email);
        if (!user) {
            return res.status(204).send({
                ok: false,
                message: "No user found with provided email"
            });
        }

        if (!isValidPassword(password, user.password)) {
            return res.status(401).send({
                ok: false,
                message: "Invalid credentials"
            });
        }

        const tokenUser = {
            email: user.email,
            role: user.role
        };

        const accessToken = generateJWT(tokenUser);

        res.cookie("accessToken", accessToken, {
            maxAge: 600000 * 10,
            httpOnly: true
        });

        res.status(200).json({
            ok: true,
            message: "Successful login",
            user: {
                id: user._id,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Error in auth controller, login: ", error);
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

export const logoutController = (req, res) => {
    res.clearCookie("accessToken");
    res.status(200).json({
        ok: true,
        message: "Logged out successfull"
    });
};
