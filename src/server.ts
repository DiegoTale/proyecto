import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { corsConfig } from "./config/cors";
// import { MongoDB } from "./data/mongo/mongo-database";
import authRoutes from "./routes/authRoutes";

dotenv.config();

dotenv.config();

// MongoDB();

const app = express();

app.use(cors(corsConfig));

//Logging
// app.use(morgan("dev"));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

export default app;
