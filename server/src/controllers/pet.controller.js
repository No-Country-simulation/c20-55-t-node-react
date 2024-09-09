import { petService } from "../services/service.js";

export const createPetController = async (req, res) => {
    try {
        const { continueCreate, ...petData } = req.body;
        const { name, age, specie, category } = petData;

        if (!continueCreate) {
            const existPets = await petService.getSimilarPets({
                name,
                specie,
                age,
                category
            });

            if (existPets.length === 0) {
                const newPet = await petService.createPet(petData);

                res.status(200).json({
                    ok: true,
                    message: "Successfully registered a new pet",
                    pet: newPet
                });
            } else {
                res.status(202).json({
                    ok: false,
                    message: "Already exist pets with similar data",
                    pets: existPets
                });
            }
        }

        if (continueCreate) {
            const newPet = await petService.createPet(petData);

            res.status(200).json({
                ok: true,
                message: "successfull pet register",
                pet: newPet
            });
        }
    } catch (error) {
        console.log(`Error in pet controller, createPet: `, error);
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

export const updatePetController = async (req, res) => {
    try {
        const petData = req.body;
        const { petId } = req.params;

        const updatedPet = await petService.updatePet(petId, petData);

        res.status(200).json({
            ok: true,
            pet: updatedPet
        });
    } catch (error) {
        console.log(`Error in pet controller, updatePet: `, error);
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

export const getAllPetsController = async (req, res) => {
    try {
        const pets = await petService.getAllPets();
        res.status(200).json({
            ok: true,
            pets
        });
    } catch (error) {
        console.log(`Error in pet controller, getAllPets: `, error);
        res.status(500).json({
            ok: false,
            message:error.message
        });
    }
};

export const getPetByIdController = async (req, res) => {
    try {
        const { petId } = req.params;
        const pet = await petService.getPetById(petId);
        res.status(200).json({
            ok: true,
            pet
        });
    } catch (error) {
        console.log(`Error in pet controller, getPetById: `, error);
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}

export const deletePetByIdController = async (req, res) => {
    try {
        const { petId } = req.params;
        const result = await petService.deletePetById(petId);
        res.status(200).json({
            ok: true,
            message: "Pet successfully deleted",
            result
        });
    } catch (error) {
        console.log(`Error in pet controller, deletePetById: `, error);
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}