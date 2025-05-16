import dotenv from "dotenv";
dotenv.config();
export default {
    PORT: 3000,
    URI: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWD}@cluster0.fmjrv.mongodb.net/rest-api`,
};
