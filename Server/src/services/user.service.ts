import UserModel, { UserDocument } from "../models/user.model.ts";

import logger from "../utils/logger";
type UserInput = Pick<UserDocument, "email" | "name" | "phone">;
export const CreateUser = async (input: UserInput) => {
    try {
        const User = await UserModel.create(input);
        return User;
    } catch (error) {
        logger.error("User creation Failed .", error);
    }
};
export default CreateUser;
