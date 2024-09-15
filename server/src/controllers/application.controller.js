import { applicationService } from "../services/service.js";

export const createApplicationController = async (req, res) => {
    try {
        const applicationData = req.body;

        const createdApplication = await applicationService.createApplication(
            applicationData
        );

        res.status(200).json({
            ok: true,
            message: "Application created successfully",
            application: createdApplication
        });
    } catch (error) {
        console.log(
            `Error in application controller, createApplication: `,
            error
        );
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

export const getAllApplicationController = async (req, res) => {
    try {
        const applications = await applicationService.getAllApplications();

        res.status(200).json({
            ok: true,
            message: "Applications retrieved successfully",
            applications
        });
    } catch (error) {
        console.log(
            "Error in application controller, getAllApplication: ",
            error
        );
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

export const getApplicationByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const application = await applicationService.getApplicationById(id);

        res.status(200).json({
            ok: true,
            message: "Application retrieved successfully",
            application
        });
    } catch (error) {
        console.log(
            "Error in application controller, getApplicattionById: ",
            error
        );
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};

export const updateApplicationController = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedApplication = await applicationService.updateApplication(
            id,
            data
        );

        res.status(200).json({
            ok: true,
            message: "Application updated successfully",
            updatedApplication
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
};
