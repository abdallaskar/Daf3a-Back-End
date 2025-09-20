import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Function to start server AFTER DB connects
const startServer = async () => {
  try {
    await connectDB(MONGO_URI);
    console.log("✅ MongoDB connected");

    const server = app.listen(PORT, () =>
      console.log(`🚀 Server running on PORT ${PORT}...`)
    );

    const io = new Server(server, {
      pingTimeout: 60000,
      cors: {
        origin: process.env.CLIENT_URL || "*",
      },
    });

    io.on("connection", (socket) => {
      console.log("Connected to socket.io");

      socket.on("setup", (userData) => {
        socket.join(userData._id);
        socket.emit("connected");
      });

      socket.on("join chat", (room) => {
        socket.join(room);
        console.log("User Joined Room: " + room);
      });

      socket.on("typing", (data) => {
        socket.to(data.room).emit("typing", {
          user: data.user,
          userName: data.userName,
          room: data.room,
        });
      });

      socket.on("stop typing", (data) => {
        socket.to(data.room).emit("stop typing", {
          user: data.user,
          userName: data.userName,
          room: data.room,
        });
      });

      socket.on("new message", (newMessageRecieved) => {
        var chat = newMessageRecieved.chat;
        if (!chat.users) return console.log("chat.users not defined");

        chat.users.forEach((user) => {
          if (user._id == newMessageRecieved.sender._id) return;

          socket.in(user._id).emit("message received", newMessageRecieved);

          const roomSockets = io.sockets.adapter.rooms.get(chat._id);
          const userSocketId = Array.from(io.sockets.sockets).find(([id, s]) =>
            s.rooms.has(user._id)
          )?.[0];

          if (!roomSockets || !userSocketId || !roomSockets.has(userSocketId)) {
            socket.in(user._id).emit("notification", {
              chat: chat,
              message: newMessageRecieved,
            });
          }
        });
      });

      socket.on("disconnect", () => {
        console.log("USER DISCONNECTED");
      });
    });
  } catch (error) {
    console.error("❌ Failed to connect DB:", error);
    process.exit(1); // Stop if DB fails
  }
};

startServer();
