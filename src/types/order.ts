import type { OrderStatus } from "../generated/prisma/client.js";

export interface CreateOrderData {
    trackingNumber: string;
    senderName: string;
    recipientName: string;
    origin: string;
    destination: string;
}

export interface FindAllOrdersParams {
    page: number;
    limit: number;
    status?: OrderStatus;
    sender?: string;
    recipient?: string;
}

export interface CreateOrderInput {
    senderName: string;
    recipientName: string;
    origin: string;
    destination: string;
}

export interface GetOrdersInput {
    page: number;
    limit: number;
    status?: OrderStatus;
    sender?: string;
    recipient?: string;
}
