import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";

import Routes from "./routes";
import Config from "./config";
dotenv.config();

class App {
  private app: express.Application;
  private routes = new Routes().router;
  private config = Config;

  constructor() {
    this.app = express();
    this.init();
    this.start();
  }

  private init(): void {
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(
      session({
        secret: process.env.SECRET_SESSION_KEY || "secretKey",
        resave: false,
        saveUninitialized: false,
      })
    );
    this.app.use(
      cors({
        origin: [process.env.APP_HOST || "http://localhost:5173"],
        credentials: true,
      })
    );
    this.app.use("/api", this.routes);
  }

  private start(): void {
    this.app.listen(process.env.PORT || "3300", () => {
      console.log("🚀 Server is launching...");
      console.log("🔴 Running on port : " + process.env.PORT || "3300");
    });
  }
}

export default new App();
