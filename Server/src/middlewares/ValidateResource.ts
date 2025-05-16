import { ZodTypeAny } from "zod";
import logger from "../utils/logger";
import { NextFunction, Request, Response } from "express";

const ValidateResource =
    (schema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                params: req.params,
                query: req.query,
            });
            next();
        } catch (error) {
            logger.error("Error Validating Resources ..", { error });
        }
    };
export default ValidateResource;
