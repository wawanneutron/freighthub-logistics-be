import type {
    Request,
    Response,
} from "express";

import type { OrderStatus } from "../generated/prisma/client.js";

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

    async getOrders(
        req: Request,
        res: Response,
    ): Promise<void> {
        const {
            page = "1",
            limit = "10",
            status,
            sender,
            recipient,
        } = req.query;

        const result = await orderService.getOrders({
            page: Number(page),
            limit: Number(limit),
            status: status as OrderStatus | undefined,
            sender: sender as string | undefined,
            recipient: recipient as string | undefined,
        });

        res.status(200).json({
            success: true,
            message: "Orders retrieved successfully",
            ...result,
        });
    },
};