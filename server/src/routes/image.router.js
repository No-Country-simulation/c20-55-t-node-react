import { Router } from "express";
import multer from "multer";
import {
    deleteImageController,
    uploadImagesController
} from "../controllers/image.controller.js";

const upload = multer({ dest: "uploads/" });

const imageRouter = Router();

imageRouter.post("/", upload.array("imgs"), uploadImagesController);
imageRouter.delete("/delete", deleteImageController);

export default imageRouter;
