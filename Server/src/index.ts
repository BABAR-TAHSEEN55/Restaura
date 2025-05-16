import logger from "./utils/logger";
import cors from "cors";
import express from "express";
import config from "config";
import DBConnection from "./utils/connection.ts";
import routes from "./routes";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = config.get<number>("PORT");
app.use(express.json());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true,
    }),
);

(async () => {
    await DBConnection();
    routes(app);
    app.listen(port || 7000, () =>
        logger.info(`Server started Succesffuly at ${port}`),
    );
})();
//TODO: : Learn to Deploy Backend
