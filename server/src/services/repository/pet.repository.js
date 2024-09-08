export default class PetRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async createPet(petData) {
        return await this.dao.createPet(petData);
    }

    async getSimilarPets(name) {
        return await this.dao.getSimilarPets(name);
    }

    async removeImgFromPet(petId, imgPath) {
        return await this.dao.removeImgFromPet(petId, imgPath);
    }

    async updatePet(petId, petData) {
        return await this.dao.updatePet(petId, petData);
    }
}
