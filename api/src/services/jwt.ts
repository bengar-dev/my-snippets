import type { Strategy as GithubStrategy } from "passport-github";
import * as jwt from "jsonwebtoken";

class JwtServices {
  constructor() {}

  public async createJwt(profile: GithubStrategy.Profile) {
    if (!profile) throw new Error("profile is required");

    return jwt.sign({ userId: profile.id }, "Euziaeuziaheuaz", {
      expiresIn: "24h",
    });
  }
}

export default JwtServices;
