import * as jwt from "jsonwebtoken";
import { User } from "@prisma/client";

class JwtServices {
  constructor() {}

  public async createJwt(profile: User) {
    if (!profile) throw new Error("profile is required");

    return jwt.sign({ userId: profile.id }, "Euziaeuziaheuaz", {
      expiresIn: "24h",
    });
  }
}

export default JwtServices;
