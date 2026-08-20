import type {
    NextFunction,
    Request,
    Response,
} from "express";

import type { ZodType } from "zod";

export const validate =
    (schema: ZodType) =>
        (
            req: Request,
            res: Response,
            next: NextFunction,
        ): void => {
            const result = schema.safeParse({
                body: req.body,
                params: req.params,
                query: req.query,
            });

            if (!result.success) {
                res.status(422).json({
                    success: false,
                    message: "Validation error",
                    errors: result.error.flatten().fieldErrors,
                });

                return;
            }

            next();
        };