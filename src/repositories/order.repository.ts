import type {
    OrderStatus,
    Prisma,
} from "../generated/prisma/client.js";

import { prisma } from "../lib/prisma.js";

interface CreateOrderData {
    trackingNumber: string;
    senderName: string;
    recipientName: string;
    origin: string;
    destination: string;
}

interface FindAllOrdersParams {
    page: number;
    limit: number;
    status?: OrderStatus;
    sender?: string;
    recipient?: string;
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

    async findAll(params: FindAllOrdersParams) {
        const {
            page,
            limit,
            status,
            sender,
            recipient,
        } = params;

        const where: Prisma.OrderWhereInput = {
            ...(status && {
                status,
            }),

            ...(sender && {
                senderName: {
                    contains: sender,
                },
            }),

            ...(recipient && {
                recipientName: {
                    contains: recipient,
                },
            }),
        };

        const skip = (page - 1) * limit;

        const [orders, total] = await prisma.$transaction([
            prisma.order.findMany({
                where,
                skip,
                take: limit,
                orderBy: {
                    createdAt: "desc",
                },
            }),

            prisma.order.count({
                where,
            }),
        ]);

        return {
            orders,
            total,
        };
    },

    findById(id: number) {
        return prisma.order.findUnique({
            where: {
                id,
            },
        });
    },

    updateStatus(id: number, status: OrderStatus) {
        return prisma.order.update({
            where: {
                id,
            },
            data: {
                status,
            },
        });
    },
};