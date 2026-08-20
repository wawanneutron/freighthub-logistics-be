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

export const getOrdersSchema = z.object({
    query: z.object({
        page: z.coerce.number().int().positive().default(1),

        limit: z.coerce
            .number()
            .int()
            .positive()
            .max(100)
            .default(10),

        status: z
            .enum([
                "PENDING",
                "IN_TRANSIT",
                "DELIVERED",
                "CANCELED",
            ])
            .optional(),

        sender: z.string().trim().optional(),

        recipient: z.string().trim().optional(),
    }),
});

export const trackOrderSchema = z.object({
    params: z.object({
        trackingNumber: z
            .string()
            .trim()
            .min(1, "Tracking number is required"),
    }),
});

export const updateOrderStatusSchema = z.object({   
    params: z.object({
        id: z.coerce.number().int().positive(),
    }),

    body: z.object({
        status: z.enum([
            "PENDING",
            "IN_TRANSIT",
            "DELIVERED",
        ]),
  }),
});

export const cancelOrderSchema = z.object({
    params: z.object({
        id: z.coerce.number().int().positive(),
    }),
}); 

export const getOrderByIdSchema = z.object({
    params: z.object({
        id: z.coerce.number().int().positive(),
    }),
});