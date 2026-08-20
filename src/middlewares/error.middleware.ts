import type {
    NextFunction,
    Request,
    Response,
} from "express";

import { ApiError } from "../utils/api-error.js";

export const errorHandler = (
    error: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction,
): void => {
    if (error instanceof ApiError) {
        res.status(error.statusCode).json({
            success: false,
            message: error.message,
        });

        return;
    }

    console.error(error);

    res.status(500).json({
        success: false,
        message: "Internal server error",
    });
};