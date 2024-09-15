export default class ApplicationRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async createApplication(data) {
        return await this.dao.createApplication(data);
    }

    async getApplicationById(applicationId) {
        return await this.dao.getApplicationById(applicationId);
    }

    async updateApplication(id, data) {
        return await this.dao.updateApplication(id, data);
    }
}
