import { Router } from "express";

import { orderController } from "../controllers/order.controller.js";

import { validate } from "../middlewares/validate.middleware.js";

import {
    createOrderSchema,
    getOrdersSchema,
    trackOrderSchema,
    updateOrderStatusSchema,
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

export default router;