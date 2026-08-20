import { z } from "zod";

export const createOrderSchema = z.object({
    body: z.object({
        senderName: z
            .string()
            .trim()
            .min(1, "Sender name is required")
            .max(100, "Sender name is too long"),

        recipientName: z
            .string()
            .trim()
            .min(1, "Recipient name is required")
            .max(100, "Recipient name is too long"),

        origin: z
            .string()
            .trim()
            .min(1, "Origin is required")
            .max(150, "Origin is too long"),

        destination: z
            .string()
            .trim()
            .min(1, "Destination is required")
            .max(150, "Destination is too long"),
    }),
});