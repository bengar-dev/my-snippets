import session from "express-session";
import type { Strategy as GithubStrategy } from "passport-github";

declare module "express-session" {
  export interface SessionData {
    passport: {
      user: GithubStrategy.Profile;
    };
  }
}
