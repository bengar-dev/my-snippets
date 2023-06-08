import { NextFunction, Request, Response } from "express";
import Middleware from ".";

class AuthMiddleware extends Middleware {
  constructor() {
    super();

    this.verifyAuth = this.verifyAuth.bind(this);
  }

  public async verifyAuth(req: Request, res: Response, next: NextFunction) {
    const { utk } = req.cookies;

    if (!utk) {
      return this.response.throwError(res, "token is required", 401);
    }

    const verifyToken = await this.services.jwt.verifyJwt(utk);

    if (!verifyToken) {
      return this.response.throwError(res, "token is invalid", 401);
    }

    const getUserFromDb = await this.services.prisma.user.findUnique({
      where: { id: verifyToken.userId },
    });

    if (!getUserFromDb) {
      return this.response.throwError(res, "user not found", 404);
    }

    res.locals.user = getUserFromDb;

    next();
  }
}

export default new AuthMiddleware();
