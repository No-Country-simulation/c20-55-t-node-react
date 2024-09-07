import express from "express";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./config/database.js";
import { PORT } from "./config/config.js";
import authRouter from "./routes/auth.router.js";

import basePath from "./utils/utils.js";
import swaggerUiExpress from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { tokenToSession } from "./middlewares/tokenToSession.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(tokenToSession);

async function main() {
    try {
        await connectToMongoDB();
        app.listen(PORT, () => {
            console.log(`Listening on port http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to the database", error);
    }
}

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentacion API Adopme",
            description: "Documentacion para uso de Swagger"
        }
    },
    apis: [`${basePath}/docs/**/*.yaml`]
};

const specs = swaggerJSDoc(swaggerOptions);

app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use("/api/auth", authRouter);

main();
