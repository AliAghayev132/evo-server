// Packages
import cors from "cors";
import http from "http";
import express from "express";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";



// Config
import { setupSwagger } from "#config/swagger.js";
import { connectToMongoDb } from "#config/configDb.js";
import { config, corsConfig } from "#config/config.js";

// Services
import { MessagesService } from "#services/MessagesService.js";

// Utils
import startServer from "#utils/server/startServer.js";
import { firstTimeStart } from "#utils/admin/firstTimeStart.js";

// Routers
import { MiscRouter } from "#routes/miscRoutes.js";
import { AdminRouter } from "#routes/adminRoutes.js";

// Variables
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Setup Methods
const setupDb = async () => connectToMongoDb();
const setupServer = () => http.createServer(app);
const setupSwaggerDocs = () => setupSwagger(app);
const setupServices = () => MessagesService.readMessagesFromJson();

const setupMiddleWares = () => {
    app.use(fileUpload());
    app.use(express.json());
    app.use(cors(corsConfig));

    app.use('/public', express.static('public'));
    app.use(express.urlencoded({ extended: true }));


}

const setupRoutes = () => {
    app.use("/api/misc", MiscRouter);
    app.use("/api/admin", AdminRouter);
}

const startApp = async () => {
    await setupDb();
    await firstTimeStart();
    setupSwaggerDocs();
    setupMiddleWares();
    setupServices();
    setupRoutes();
    const server = setupServer();

    app.use(express.static(path.join(__dirname, "../evo-client/dist")));
    app.use("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../evo-client/dist/index.html"));
    });

    server.listen(config.development.port, startServer);

};



startApp();


// Hello Ilqar V1.0