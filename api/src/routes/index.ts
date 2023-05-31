import express from "express";
import AuthRoutes from "./auth";

class Routes {
  public router: express.Router;
  private authRoutes = AuthRoutes;

  constructor() {
    this.router = express.Router();
    this.init();
  }

  private init(): void {
    this.router.use("/auth", this.authRoutes);
  }
}

export default Routes;
