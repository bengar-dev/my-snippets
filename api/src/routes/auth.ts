import { Router, Request, Response } from "express";
import passport from "passport";
import AuthControllers from "@/controllers/auth";

class AuthRoutes {
  public router: Router;
  private authControllers = AuthControllers;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init(): void {
    this.router.get(
      "/sign",
      passport.authenticate("github", {
        scope: ["user:email"],
      })
    );

    this.router.get(
      "/callback",
      passport.authenticate("github", { failureRedirect: "/login" }),
      this.authControllers.authCallback
    );

    this.router.get("/me", this.authControllers.getUserProfil);
  }
}

export default new AuthRoutes().router;

/**
 * add Service and prisma service.
 */
