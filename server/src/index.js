import express from "express";
import connectToMongoDB from "./config/database.js";
import  { PORT } from "./config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


async function main() {
    try {
        await connectToMongoDB();
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    } catch (error) {
        console.error('Error connecting to the database', error);   
    }
}

main()