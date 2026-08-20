import { Router } from "express";

import { orderController } from "../controllers/order.controller.js";

import { validate } from "../middlewares/validate.middleware.js";

import {
    createOrderSchema,
    getOrdersSchema,
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

export default router;