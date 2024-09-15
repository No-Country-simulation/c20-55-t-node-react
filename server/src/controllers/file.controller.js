import fs from "fs";

const saveFile = (id, file) => {
    const newPath = `./uploads/${id}${file.originalname}`;
    fs.renameSync(file.path, newPath);
    return newPath;
};

export const uploadFileController = (req, res) => {
    try {
        const { id } = req.body;
        const filePaths = req.files.map((file) => saveFile(id, file));

        res.status(200).json({
            ok: true,
            message: "Images uploaded successfully",
            paths: filePaths.map((path) => path.replace(".", "/server"))
        });
    } catch (error) {
        console.log(`Error in image controller, uploadImages: `, error);
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

export const deleteFileController = async (req, res) => {
    try {
        const { filePath } = req.body;

        const uploadFilePath = filePath.replace("/server", ".");
        if (fs.existsSync(uploadFilePath)) {
            fs.unlinkSync(uploadFilePath);

            res.status(200).json({
                ok: true,
                message: "File deleted successfully"
            });
        } else {
            res.status(404).json({
                ok: false,
                message: "File not found"
            });
        }
    } catch (error) {
        console.log(`Error in image controller, file delete: `, error);
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};
