import SnippetsControllers from "@/controllers/snippets";
import AuthMiddleware from "@/middleware/auth";
import { User } from "@prisma/client";
import { Router } from "express";

class SnippetsRoutes {
  public router: Router;
  public AuthMiddleware = AuthMiddleware;
  public SnippetsControllers = SnippetsControllers;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init(): void {
    this.router.get(
      "/",
      this.AuthMiddleware.verifyAuth,
      this.SnippetsControllers.getAllSnippets
    );
  }
}

export default new SnippetsRoutes().router;
