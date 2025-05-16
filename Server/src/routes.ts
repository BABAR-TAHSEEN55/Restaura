import { Express, Request, Response } from "express";
import ValidateResource from "./middlewares/ValidateResource.ts";
import { CreateUserSchema } from "./schemas/ user.schema.ts";
import { CreateUserHanlder } from "./controllers/user.controller.ts";
export default function Routes(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => {
        res.sendStatus(200);
    });
    app.post(
        "/api/users",
        ValidateResource(CreateUserSchema),
        CreateUserHanlder,
    );
}
