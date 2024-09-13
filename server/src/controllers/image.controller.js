import fs from "fs";

const saveImage = (id, file) => {
    const newPath = `./uploads/${id}${file.originalname}`;
    fs.renameSync(file.path, newPath);
    return newPath;
};

export const uploadImagesController = (req, res) => {
    try {
        const { id } = req.body;
        const imagePaths = req.files.map((file) => saveImage(id, file));

        res.status(200).json({
            ok: true,
            message: "Images uploaded successfully",
            paths: imagePaths.map((path) => path.replace(".", "/server"))
        });
    } catch (error) {
        console.log(`Error in image controller, uploadImages: `, error);
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

export const deleteImageController = async (req, res) => {
    try {
        const { imgPath } = req.body;

        const uploadImgPath = imgPath.replace("/server", ".");
        if (fs.existsSync(uploadImgPath)) {
            fs.unlinkSync(uploadImgPath);

            res.status(200).json({
                ok: true,
                message: "Image deleted successfully"
            });
        } else {
            res.status(404).json({
                ok: false,
                message: "Image not found"
            });
        }
    } catch (error) {
        console.log(`Error in image controller, deleteImages: `, error);
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};
