import mongoose from "mongoose";
import petModel from "../src/models/pets.js";
import { seedPets } from "./seedPets.js";
import connectToMongoDB from "../src/config/database.js";
import userModel from "../src/models/users.js";
import { seedUsers } from "./seedUsers.js";
import applicationModel from "../src/models/applications.js";
import { seedApplications } from "./seedApplication.js";

async function seedDatabase() {
    connectToMongoDB();

    await petModel.deleteMany({});
    await petModel.insertMany(seedPets);
    await userModel.deleteMany({});
    await userModel.insertMany(seedUsers);

    const pets = await petModel.find({});

    const updatedApplications = await Promise.all(
        seedApplications.map(async (application) => {
            const adopterName = application.adopterInfo.name
                .split(" ")[0]
                .toLocaleLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase();

            const user = await userModel.findOne({
                email: {
                    $regex: new RegExp(adopterName, "i")
                }
            });

            const petIndex = parseInt(Math.random() * pets.length);

            return {
                ...application,
                adopterId: user._id,
                petId: pets[petIndex]._id
            };
        })
    );

    await applicationModel.deleteMany({});
    await applicationModel.insertMany(updatedApplications);
    console.log("Datos de prueba insertados");
    mongoose.connection.close();
}

seedDatabase();
