import type {
    Request,
    Response,
} from "express";

import { orderService } from "../services/order.service.js";

export const orderController = {
    async createOrder(
        req: Request,
        res: Response,
    ): Promise<void> {
        const order = await orderService.createOrder(req.body);

        res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: order,
        });
    },
};