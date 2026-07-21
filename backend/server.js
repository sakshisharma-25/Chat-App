import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/ConnectToMongoDb.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Static frontend files serve karne ke liye
app.use(express.static(path.join(__dirname, "frontend", "dist")));

// Frontend client routing fix
app.get("/{0,}", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});