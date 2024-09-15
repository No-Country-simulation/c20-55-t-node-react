import { Router } from "express";
import multer from "multer";
import {
    deleteFileController,
    uploadFileController
} from "../controllers/file.controller.js";

const upload = multer({ dest: "uploads/" });

const filesRouter = Router();

filesRouter.post("/", upload.array("files"), uploadFileController);
filesRouter.delete("/", deleteFileController);

export default filesRouter;
