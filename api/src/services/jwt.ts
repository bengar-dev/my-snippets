import * as jwt from "jsonwebtoken";
import { User } from "@prisma/client";

class JwtServices {
  constructor() {}

  public async createJwt(profile: User): Promise<string> {
    if (!profile) throw new Error("profile is required");

    return jwt.sign(
      { userId: profile.id },
      process.env.API_TOKEN_JWT_KEY || "tokenKey",
      {
        expiresIn: "24h",
      }
    );
  }

  public async verifyJwt(token: string): Promise<{ userId: string } | false> {
    try {
      if (!token) throw new Error("token is required");
      return jwt.verify(token, process.env.API_TOKEN_JWT_KEY || "tokenKey") as {
        userId: string;
      };
    } catch (err) {
      return false;
    }
  }
}

export default JwtServices;
