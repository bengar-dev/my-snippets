import express from "express";
import AuthRoutes from "./auth";
import SnippetsRoutes from "./snippets";

class Routes {
  public router: express.Router;
  private authRoutes = AuthRoutes;
  private snippetsRoutes = SnippetsRoutes;

  constructor() {
    this.router = express.Router();
    this.init();
  }

  private init(): void {
    this.router.use("/auth", this.authRoutes);
    this.router.use("/snippets", this.snippetsRoutes);
  }
}

export default Routes;
