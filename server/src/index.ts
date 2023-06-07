import express from "express";
import cors from "cors";

const port = process.env.CHAT_SERVER_PORT;

function logInfo(message: string) {
    console.log(message);
}

function createServer() {
    const app = express();

    app.use(cors());

    return app;
}

const app = createServer();

app.listen(port, () => {
    logInfo(`Listening on port ${port}`);
  })