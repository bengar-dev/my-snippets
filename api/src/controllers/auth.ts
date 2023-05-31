import { Request, Response } from "express";
import Controllers from ".";

class AuthControllers extends Controllers {
  constructor() {
    super();

    this.authCallback = this.authCallback.bind(this);
  }

  public async authCallback(req: Request, res: Response): Promise<Response> {
    try {
      const { code } = req.query;
      //@ts-ignore
      const userFromSession = req.session.passport?.user;

      if (!code || !userFromSession) {
        return res
          .status(400)
          .json({ message: "code is required", status: false });
      }

      const token = await this.services.jwt.createJwt(userFromSession);
      res.cookie("utk", token);

      return res.status(200).json({ message: "Helloworld", status: true });
    } catch (err: any) {
      return res.status(500).json({
        message: err.message,
        status: false,
      });
    }
  }
}

export default new AuthControllers();
