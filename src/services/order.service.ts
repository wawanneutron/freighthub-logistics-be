import type { OrderStatus } from "../generated/prisma/client.js";

import { orderRepository } from "../repositories/order.repository.js";
import { generateTrackingNumber } from "../utils/tracking-number.js";
import { ApiError } from "../utils/api-error.js";

interface CreateOrderInput {
    senderName: string;
    recipientName: string;
    origin: string;
    destination: string;
}

interface GetOrdersInput {
    page: number;
    limit: number;
    status?: OrderStatus;
    sender?: string;
    recipient?: string;
}

export const orderService = {
    async createOrder(input: CreateOrderInput) {
        const trackingNumber = generateTrackingNumber();

        return orderRepository.create({
            trackingNumber,
            senderName: input.senderName,
            recipientName: input.recipientName,
            origin: input.origin,
            destination: input.destination,
        });
    },

    async getOrders(input: GetOrdersInput) {
        const { orders, total } = await orderRepository.findAll(input);

        const totalPages = Math.ceil(total / input.limit);

        return {
            data: orders,

            pagination: {
                page: input.page,
                limit: input.limit,
                total,
                totalPages,
            },
        };
    },


    async trackOrder(trackingNumber: string) {
        const order = await orderRepository.findByTrackingNumber(trackingNumber);

        if (!order) throw new ApiError(404, "Order not found");

        return order;
    },

    async updateOrderStatus(id: number, status: OrderStatus) {
        const order = await orderRepository.findById(id);

        if (!order) throw new ApiError(404, "Order not found");

        if (order.status === "CANCELED") throw new ApiError(400, "Canceled order status cannot be updated");

        if (order.status === "DELIVERED") throw new ApiError(400, "Delivered order status cannot be updated");

        return orderRepository.updateStatus(id, status);
    },
};