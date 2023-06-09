import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import session from "express-session";
import { configureSocketServer } from "./connectionHandler";
import { logError } from "./logger";
import { authinticate } from "./mongo";
import bodyParser from "body-parser";



const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  });

// TODO: make more generic env param checker
if (process.env.CHAT_SERVER_PORT === undefined) {
    logError(`Missing required enviroment variable ${"CHAT_SERVER_PORT"}`)
    throw new Error();
}
const port = Number.parseInt(process.env.CHAT_SERVER_PORT);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(sessionMiddleware);

const httpServer = createServer(app);
const io = new Server(httpServer, {
        cors: {
            origin: "*"
        }, 
        connectionStateRecovery: {
            maxDisconnectionDuration: 2 * 60 * 1000
        }
    });

io.engine.use(sessionMiddleware);

configureSocketServer(io);

app.post("/login", async (req, res) => {
    const userId = req.body.userId;
    const hashedPassword = req.body.hashedPassword;
    const authinticated = await authinticate(userId, hashedPassword);
    if (authinticated) {
        res.status(204).end();
    } else {
        res.status(401).end();
    }
  });

httpServer.listen(port);