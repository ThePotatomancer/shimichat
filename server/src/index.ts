import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { configureSocketServer } from "./connectionHandler";
import { logError } from "./logger";

dotenv.config();

// TODO: make more generic env param checker
if (process.env.CHAT_SERVER_PORT === undefined) {
    logError(`Missing required enviroment variable ${"CHAT_SERVER_PORT"}`)
    throw new Error();
}
const port = Number.parseInt(process.env.CHAT_SERVER_PORT);

const app = express();

app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
        cors: {
            origin: "*"
        }, 
        connectionStateRecovery: {
            maxDisconnectionDuration: 2 * 60 * 1000
        }
    });

configureSocketServer(io);

httpServer.listen(port);