import userModel from '../models/users.js';

export default class AuthService {
  async getUserByEmail(email) {
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        throw new Error(`No user found with email: ${email}`);
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
