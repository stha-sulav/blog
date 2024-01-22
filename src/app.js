import express from "express";

export const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
import UserRoutes from "./routes/user.route.js";
app.use("/api/v1/user", UserRoutes);

import AuthRoutes from "./routes/auth.route.js";
app.use("/api/v1/auth", AuthRoutes);
