
export default class AuthRepository {
  constructor(dao) {
    this.dao = dao;
  }
  async getUserByEmail(email) {
    return await this.dao.getUserByEmail(email);
  }
}
