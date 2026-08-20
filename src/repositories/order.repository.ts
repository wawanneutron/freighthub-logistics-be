import { prisma } from "../lib/prisma.js";

interface CreateOrderData {
    trackingNumber: string;
    senderName: string;
    recipientName: string;
    origin: string;
    destination: string;
}

export const orderRepository = {
    create(data: CreateOrderData) {
        return prisma.order.create({
            data,
        });
    },

    findByTrackingNumber(trackingNumber: string) {
        return prisma.order.findUnique({
            where: {
                trackingNumber,
            },
        });
    },
};