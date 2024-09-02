import { authService } from '../services/service.js';
import { isValidPassword } from '../utils/bcrypt.js';
import { generateJWT } from '../utils/jwt.js';

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await authService.getUserByEmail(email);
    if (!user) {
      return res.status(204).send({
        ok: false,
        message: 'No user found with provided email'
      });
    }

    if (!isValidPassword(password, user.password)) {
      return res.status(401).send({
        ok: false,
        message: 'Invalid credentials'
      });
    }

    const tokenUser = {
      email: user.email
    };

    const accessToken = generateJWT(tokenUser);

    res.cookie('accessToken', accessToken, {
      maxAge: 600000 * 10,
      httpOnly: true
    });

    res.status(200).json({
      ok: true,
      message: 'Successful login'
    });
  } catch (error) {
    console.error('Error in auth controller, login: ', error);
    res.status(500).json({
      ok: false,
      message: error.message
    });
  }
};
