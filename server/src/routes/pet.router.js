import { Router } from "express";
import multer from "multer";
import {
    createPetController,
    updatePetController
} from "../controllers/pet.controller.js";

const upload = multer({ dest: "uploads/" });

const petRouter = Router();

petRouter.post("/create", upload.array("imgs"), createPetController);
petRouter.put("/update/:petId", updatePetController);

export default petRouter;
