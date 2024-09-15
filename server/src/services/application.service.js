import applicationModel from "../models/applications.js";
import mongoose from "mongoose";

export default class ApplicationService {
    async createApplication(data) {
        try {
            const application = new applicationModel(data);
            await application.save();

            return application;
        } catch (error) {
            throw new Error(`Error creating application: ${error.message}`);
        }
    }

    async getAllApplications() {
        try {
            return await applicationModel.find(
                {},
                "_id adopterId petId status applicationDate adopterInfo.name adopterInfo.phone adopterInfo.email adopterInfo.nationalID"
            );
        } catch (error) {
            throw new Error(`Error retrieving applications: ${error.message}`);
        }
    }

    async getApplicationById(id) {
        try {
            const application = await applicationModel
                .findById(id)
                .populate("adopterId")
                .populate("petId");

            if (!application) {
                throw new Error("Application not found");
            }

            return application;
        } catch (error) {
            throw new Error(`Error retrieving application: ${error.message}`);
        }
    }

    async updateApplication(id, data) {
        try {
            const currentApplication = await applicationModel.findById(id);
            if (!currentApplication) {
                throw new Error("Application not found");
            }

            const updateNestedProperties = (target, source) => {
                for (const key in source) {
                    if (source.hasOwnProperty(key)) {
                        if (
                            typeof source[key] === "object" &&
                            !Array.isArray(source[key])
                        ) {
                            if (!target[key]) target[key] = {};
                            updateNestedProperties(target[key], source[key]);
                        } else {
                            target[key] = source[key];
                        }
                    }
                }
            };

            updateNestedProperties(currentApplication, data);

            const updatedApplication = await currentApplication.save();

            return updatedApplication;
        } catch (error) {
            throw new Error("Error updating application: " + error.message);
        }
    }
}
