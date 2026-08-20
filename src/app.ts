import express from "express";
import cors from "cors";

import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { notFoundHandler } from "./middlewares/not-found.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        success: true,
        message: "FreightHub Logistics API is running",
    });
});

app.use("/api", routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;