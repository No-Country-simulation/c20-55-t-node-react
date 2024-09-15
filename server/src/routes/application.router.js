import { Router } from "express";
import {
    createApplicationController,
    getAllApplicationController,
    getApplicationByIdController,
    updateApplicationController
} from "../controllers/application.controller.js";

const applicationRouter = Router();

applicationRouter.post("/", createApplicationController);
applicationRouter.get("/", getAllApplicationController);
applicationRouter.get("/:id", getApplicationByIdController);
applicationRouter.put("/:id", updateApplicationController);

export default applicationRouter;
