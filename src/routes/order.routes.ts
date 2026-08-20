import { Router } from "express";

import { orderController } from "../controllers/order.controller.js";

import { validate } from "../middlewares/validate.middleware.js";

import {
    createOrderSchema,
    getOrdersSchema,
    trackOrderSchema,
    updateOrderStatusSchema,
    cancelOrderSchema,
} from "../schemas/order.schema.js";

const router = Router();

router.post(
    "/",
    validate(createOrderSchema),
    orderController.createOrder,
);

router.get(
    "/",
    validate(getOrdersSchema),
    orderController.getOrders,
);

router.get(
    "/track/:trackingNumber",
    validate(trackOrderSchema),
    orderController.trackOrder,
);

router.patch(
    "/:id/status",
    validate(updateOrderStatusSchema),
    orderController.updateOrderStatus,
);

router.patch(
    "/:id/cancel",
    validate(cancelOrderSchema),
    orderController.cancelOrder,
);

export default router;