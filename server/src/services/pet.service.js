import petModel from "../models/pets.js";

export default class PetService {
    async createPet(petData) {
        const {
            name,
            age,
            specie,
            breed,
            description,
            size,
            healthStatus,
            imgs,
            category,
            post
        } = petData;

        try {
            const newPet = new petModel({
                name,
                age,
                specie,
                breed,
                description,
                size,
                healthStatus,
                imgs,
                category,
                post
            });
            newPet.save();
            return newPet;
        } catch (error) {
            throw new Error(`Error creating pet: ${error.message}`);
        }
    }

    async getSimilarPets({ name, specie, age, category }) {
        try {
            const pets = await petModel.find({
                $and: [
                    { name: { $regex: name, $options: "i" } },
                    { specie: specie },
                    { category: category },
                    { age: age }
                ]
            });
            return pets;
        } catch (error) {
            throw new Error(`Error existence of pet: ${error.message}`);
        }
    }

    async removeImgFromPet(petId, imgPath) {
        const pet = await petModel.findById(petId);

        if (!pet) {
            throw new Error("Pet not found");
        }

        pet.imgs = pet.imgs.filter((img) => img !== imgPath);
        pet.save();

        return pet;
    }

    async updatePet(petId, petData) {
        try {
            const updatedPet = petModel.findByIdAndUpdate(petId, petData, {
                new: true
            });

            if (!updatedPet) {
                throw new Error("Pet not found");
            }

            return updatedPet;
        } catch (error) {
            throw new Error(`Error updating pet: ${error.message}`);
        }
    }

    async getAllPets() {
        try {
            return await petModel.find({});
        } catch (error) {
            throw new Error(`Error retrieving pets: ${error.message}`);
            
        }
    }

    async getPetById(petId) {
        try {
            const pet = await petModel.findById(petId);

            if(!pet) {
                throw new Error("Pet not found");
            }

            return pet;
        } catch (error) {
            throw new Error(`Error finding pet by ID: ${error.message}`);
            
        }
    }

    async deletePetById(petId) {
        try {
            const result = await petModel.findByIdAndDelete(petId);

            if(!result) {
                throw new Error("Pet not found");
            }

            return result;
        } catch (error) {
            throw new Error(`Error deleting pet by ID: ${error.message}`);
            
        }
    }
}
