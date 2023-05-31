import { Router, Request, Response } from "express";
import passport from "passport";

class AuthRoutes {
  public router: Router;

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
      (req, res) => {
        return res
          .status(200)
          .json({ message: "Hello world", status: { code: 200 } });
      }
    );
  }
}

export default new AuthRoutes().router;

/**
 * add Service and prisma service.
 */
