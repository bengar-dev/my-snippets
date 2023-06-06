import { Request, Response } from "express";
import Controllers from ".";
import { JwtPayload } from "jsonwebtoken";

class AuthControllers extends Controllers {
  constructor() {
    super();

    this.authCallback = this.authCallback.bind(this);
    this.getUserProfil = this.getUserProfil.bind(this);
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

  public async getUserProfil(req: Request, res: Response): Promise<Response> {
    const { utk } = req.cookies;
    try {
      const verifyToken = (await this.services.jwt.verifyJwt(
        utk
      )) as JwtPayload;
      if (!verifyToken) {
        return this.response.throwError(res, "token is invalid", 401);
      }

      const getUserFromDb = await this.services.prisma.user.findUnique({
        where: { id: verifyToken.userId },
      });
      if (!getUserFromDb) {
        return this.response.throwError(res, "user not found", 404);
      }

      const filterDataSensitive = this.response.filterData(getUserFromDb, [
        "accessToken",
        "githubId",
      ]);

      return this.response.success(res, filterDataSensitive, 200);
    } catch (err: any) {
      return this.response.error(res, err.message, 500);
    }
  }
}

export default new AuthControllers();
