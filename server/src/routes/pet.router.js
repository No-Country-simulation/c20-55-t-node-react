import { Router } from "express";
import {
    createPetController,
    updatePetController,
    getAllPetsController,
    getPetByIdController,
    deletePetByIdController
} from "../controllers/pet.controller.js";


const petRouter = Router();

petRouter.post("/create", createPetController);
petRouter.put("/update/:petId", updatePetController);
petRouter.get("/", getAllPetsController);
petRouter.get("/:petId", getPetByIdController);
petRouter.delete("/delete/:petId", deletePetByIdController);   

export default petRouter;
