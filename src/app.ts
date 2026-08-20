import express from "express";
import cors from "cors";

import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/error.middleware.js";

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

app.use(errorHandler);

export default app;