import { Request, Response } from "express";
import Controllers from ".";

class AuthControllers extends Controllers {
  constructor() {
    super();

    this.authCallback = this.authCallback.bind(this);
  }

  public async authCallback(
    req: Request,
    res: Response
  ): Promise<Response | void> {
    try {
      const { code } = req.query;

      // @ts-ignore
      const userFromSession = req.session.passport?.user;

      if (!code || !userFromSession) {
        return this.response.throwError(res, "code is required", 401);
      }

      const token = await this.services.jwt.createJwt(userFromSession);

      res.cookie("utk", token);
      res.redirect(process.env.APP_HOST || "http://localhost:3300");
    } catch (err: any) {
      return res.status(500).json({
        message: err.message,
        status: false,
      });
    }
  }
}

export default new AuthControllers();
