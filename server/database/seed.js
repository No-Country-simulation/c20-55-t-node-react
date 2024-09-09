import mongoose from "mongoose";
import petModel from "../src/models/pets.js";
import { seedPets } from "./seedPets.js";
import connectToMongoDB from "../src/config/database.js";

async function seedDatabase() {
    connectToMongoDB();

    await petModel.deleteMany({});
    await petModel.insertMany(seedPets);
    console.log("Datos de prueba insertados");
    mongoose.connection.close();
}

seedDatabase();
