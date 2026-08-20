import { randomBytes } from "node:crypto";

export const generateTrackingNumber = (): string => {
    const timestamp = Date.now().toString(36).toUpperCase();

    const random = randomBytes(4)
        .toString("hex")
        .toUpperCase();

    return `FH-${timestamp}-${random}`;
};