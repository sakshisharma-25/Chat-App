import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

// userSocketMap ko yahan declare karna zaroori hai {userId: socketId}
const userSocketMap = {};

// Helper function banaya hai jo kisi specific user ki socketId return karega (aage chat me kaam aayega)
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;

    console.log("USER ID:", userId);

    if (userId) {
        userSocketMap[userId] = socket.id;
    }

    console.log("USER SOCKET MAP:", userSocketMap);

    // Connect hote hi saare clients ko batado kaun-kaun online hai
    // io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // socket.on() is used to listen to the events. can be used both on client and server side
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);

        delete userSocketMap[userId];

        console.log("UPDATED USER SOCKET MAP:", userSocketMap);

        // Nayi updated list fir se sabhi clients ko bhej do
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };