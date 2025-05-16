import config from "config";
import mongoose from "mongoose";
import logger from "./logger";

const uri = config.get<string>("URI");
const DBConnection = async () => {
    try {
        await mongoose.connect(uri);
        logger.info("DB Connected");
    } catch (error) {
        logger.error("DB Couldn't connect", "SYSTEM", { error });
        process.exit(1);
    }
};
export default DBConnection;
