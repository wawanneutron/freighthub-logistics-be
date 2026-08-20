import { orderRepository } from "../repositories/order.repository.js";
import { generateTrackingNumber } from "../utils/tracking-number.js";

interface CreateOrderInput {
    senderName: string;
    recipientName: string;
    origin: string;
    destination: string;
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
};