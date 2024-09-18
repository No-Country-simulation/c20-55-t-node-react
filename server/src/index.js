import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./config/database.js";
import { PORT } from "./config/config.js";
import basePath from "./utils/utils.js";
import authRouter from "./routes/auth.router.js";
import petRouter from "./routes/pet.router.js";
import applicationRouter from "./routes/application.router.js";
import filesRouter from "./routes/files.router.js";

import swaggerUiExpress from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

import { tokenToSession } from "./middlewares/tokenToSession.js";
import { trimStrings } from "./middlewares/trimStrings.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(tokenToSession);
app.use(trimStrings);


const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

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
            title: "Documentacion API ADOPPET",
            description:
                "Documentacion para uso de Swagger, api base: http://localhost:3000/api/"
        }
    },
    apis: [`${basePath}/docs/**/*.yaml`]
};

const specs = swaggerJSDoc(swaggerOptions);

app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use("/api/auth", authRouter);
app.use("/api/pet", petRouter);
app.use("/api/file", filesRouter);
app.use("/api/application", applicationRouter);

main();
