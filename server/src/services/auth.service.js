import userModel from "../models/users.js";

export default class AuthService {
    async createUser({ email, password, role }) {
        try {
            const existUser = await this.checkIfUserExists(email);
            
            if (existUser) {
                throw new Error("User with this email already exists");
            }

            const user = new userModel({ email, password, role });
            user.save();
            return user;
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    async getUserByEmail(email) {
        return this.findUserByEmail(email);
    }

    async findUserByEmail(email) {
        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error(`No user found with email: ${email}`);
        }
        return user;
    }

    async checkIfUserExists(email) {
        const user = await userModel.findOne({ email });
        return user;
    }
}
