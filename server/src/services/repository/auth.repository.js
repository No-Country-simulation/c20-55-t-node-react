export default class AuthRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async createUser(userData) {
        return await this.dao.createUser(userData);
    }

    async getUserByEmail(email) {
        return await this.dao.getUserByEmail(email);
    }
}
