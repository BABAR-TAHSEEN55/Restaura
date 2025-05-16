import { Request, Response, NextFunction } from "express";
import CreateUser from "../services/user.service.ts";
import { CreateUserInput } from "../schemas/user.schema.ts";

export const CreateUserHanlder = async (
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response,
) => {
    try {
        const user = await CreateUser(req.body);
        res.status(200).send( user );
    } catch (error) {
        res.sendStatus(400).send("Error in Controller..");
    }
};
